#!/usr/bin/env python3
"""Optimize images and videos under src/assets, and fix every code reference.

Usage (run from the repo root):
    py scripts/optimize_assets.py --dry-run          # show what would change
    py scripts/optimize_assets.py                    # images and videos
    py scripts/optimize_assets.py --images           # images only
    py scripts/optimize_assets.py --videos           # videos only

One time setup:
    py -m pip install pillow imageio-ffmpeg

What it does
- Images (png, jpg, jpeg): resized to a sensible maximum width and converted to WebP. A file is only
  replaced when the WebP is clearly smaller. Imports and import.meta.glob patterns in src/ are rewritten
  to the new extension automatically.
- Videos (mp4): re-encoded with H.264 (CRF 27, faststart), width capped, audio at 80 kbps. The file name
  stays the same, so no code changes are needed. A file is only replaced when the new one is smaller.
- Originals are copied to BACKUP_DIR (git ignored) before anything is touched.
- It is safe to run again: already optimized files are skipped.
"""
import argparse
import io
import os
import re
import shutil
import subprocess
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit("Missing dependency: py -m pip install pillow imageio-ffmpeg")

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
ASSETS = os.path.join(ROOT, "src", "assets")
SRC = os.path.join(ROOT, "src")
BACKUP_DIR = os.path.join(ROOT, "_creatives", "asset-originals")

IMG_EXT = (".png", ".jpg", ".jpeg")
VID_EXT = (".mp4",)

MAX_WIDTH = 1600          # general images
MAX_WIDTH_LOGO = 800      # files with "logo" in the name
WEBP_QUALITY = 80
WEBP_MIN_SAVING = 0.80    # keep the WebP only if it is under 80 percent of the original size
MIN_IMAGE_BYTES = 20_000  # below this the saving is not worth a rename

VIDEO_MAX_WIDTH = 576   # cards show these at roughly 300 css px wide, 576 stays sharp on high dpi screens
VIDEO_MAX_WIDTH_HERO = 1080   # brand identity reels stay sharper
VIDEO_CRF = 29
VIDEO_MIN_SAVING = 0.90       # keep the new file only if it is under 90 percent of the original


def mb(n):
    return f"{n / 1048576:.2f} MB"


def backup(path):
    rel = os.path.relpath(path, ROOT)
    dest = os.path.join(BACKUP_DIR, rel)
    if not os.path.exists(dest):
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        shutil.copy2(path, dest)


def walk(exts):
    for d, _, files in os.walk(ASSETS):
        for f in sorted(files):
            if f.lower().endswith(exts):
                yield os.path.join(d, f)


# ---------------------------------------------------------------- images
def convert_image(path, dry):
    base, _ = os.path.splitext(path)
    out = base + ".webp"
    size = os.path.getsize(path)
    if size < MIN_IMAGE_BYTES:
        return None
    cap = MAX_WIDTH_LOGO if "logo" in os.path.basename(path).lower() else MAX_WIDTH
    with Image.open(path) as im:
        im.load()
        has_alpha = im.mode in ("RGBA", "LA") or "transparency" in im.info
        im = im.convert("RGBA" if has_alpha else "RGB")
        if im.width > cap:
            h = round(im.height * cap / im.width)
            im = im.resize((cap, h), Image.LANCZOS)
        buf = io.BytesIO()
        im.save(buf, "WEBP", quality=WEBP_QUALITY, method=6, alpha_quality=90)
    new_size = buf.tell()
    if new_size >= size * WEBP_MIN_SAVING:
        return None
    if not dry:
        backup(path)
        with open(out, "wb") as fh:
            fh.write(buf.getvalue())
        os.remove(path)
    return (path, out, size, new_size)


SPEC_RE = re.compile(r"""(['"`])((?:@/|\.{1,2}/)[^'"`]*?assets/[^'"`]+?)\1""")


def resolve_spec(spec, file_dir):
    if spec.startswith("@/"):
        return os.path.normpath(os.path.join(SRC, spec[2:]))
    return os.path.normpath(os.path.join(file_dir, spec))


def rewrite_references(mapping, dry):
    """mapping: old absolute path -> new absolute path. Returns number of edited files."""
    old_by_norm = {os.path.normcase(os.path.normpath(o)): n for o, n in mapping.items()}
    edited = 0
    for d, _, files in os.walk(SRC):
        for f in files:
            if not f.endswith((".ts", ".tsx")):
                continue
            p = os.path.join(d, f)
            text = io.open(p, encoding="utf-8").read()
            orig = text

            # 1. explicit imports / path strings: resolve each one to a real file
            def fix(m):
                q, spec = m.group(1), m.group(2)
                target = os.path.normcase(resolve_spec(spec, d))
                if target in old_by_norm:
                    new_spec = os.path.splitext(spec)[0] + ".webp"
                    return q + new_spec + q
                return m.group(0)

            text = SPEC_RE.sub(fix, text)

            # 2. glob patterns: widen the image extension list so converted files are still found
            def fix_glob(m):
                head, q, pattern = m.group(1), m.group(2), m.group(3)
                if not re.search(r"\*\.(\{[^}]*\b(jpe?g|png)\b[^}]*\}|jpe?g|png)", pattern, re.I):
                    return m.group(0)  # not an image glob (for example videos)
                if re.search(r"webp", pattern, re.I):
                    return m.group(0)  # already includes webp
                new = re.sub(r"\*\.(jpe?g|png)\b", r"*.{\1,webp}", pattern, flags=re.I)
                new = re.sub(r"(\*\.\{)([^}]*)(\})", lambda mm: mm.group(0) if "webp" in mm.group(2).lower() else mm.group(1) + mm.group(2) + ",webp" + mm.group(3), new)
                return head + q + new + q

            text = re.sub(r"(import\.meta\.glob\(\s*)(['\"`])([^'\"`]+)\2", fix_glob, text)

            # 3. name lookups such as plume('01_hero.jpg'): swap the extension for converted files
            converted_names = {os.path.basename(o) for o in mapping}
            if "import.meta.glob" in text:
                def fix_name(m):
                    q, name = m.group(1), m.group(2)
                    if name in converted_names:
                        return q + os.path.splitext(name)[0] + ".webp" + q
                    return m.group(0)
                text = re.sub(r"""(['"])([\w\-]+\.(?:png|jpe?g))\1""", fix_name, text)

            if text != orig:
                edited += 1
                if not dry:
                    io.open(p, "w", encoding="utf-8", newline="\n").write(text)
    return edited


def run_images(dry):
    print("== Images ==")
    mapping = {}
    saved = 0
    for p in walk(IMG_EXT):
        r = convert_image(p, dry)
        if r:
            old, new, a, b = r
            mapping[old] = new
            saved += a - b
            print(f"  {os.path.relpath(old, ASSETS):70s} {mb(a):>9} -> {mb(b):>9}")
    print(f"  {len(mapping)} images converted, {mb(saved)} saved")
    if mapping:
        n = rewrite_references(mapping, dry)
        print(f"  references updated in {n} source files")
    return saved


# ---------------------------------------------------------------- videos
def ffmpeg_exe():
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except ImportError:
        exe = shutil.which("ffmpeg")
        if exe:
            return exe
        sys.exit("Missing ffmpeg: py -m pip install imageio-ffmpeg")


def video_width(ff, path):
    r = subprocess.run([ff, "-hide_banner", "-i", path], capture_output=True, text=True)
    m = re.search(r"Video: .*?, (\d{3,5})x(\d{3,5})", r.stderr)
    return int(m.group(1)) if m else None


def encode_video(ff, path, dry):
    backup_path = os.path.join(BACKUP_DIR, os.path.relpath(path, ROOT))
    source = backup_path if os.path.exists(backup_path) else path
    size = os.path.getsize(path)
    width = video_width(ff, source)
    hero = "brand-identity" in path.replace("\\", "/")
    cap = VIDEO_MAX_WIDTH_HERO if hero else VIDEO_MAX_WIDTH
    tmp = path + ".tmp.mp4"
    cmd = [
        ff, "-y", "-hide_banner", "-loglevel", "error", "-i", source,
        "-vf", f"scale='min({cap},iw)':-2",
        "-c:v", "libx264", "-preset", "faster", "-crf", str(VIDEO_CRF), "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-b:a", "80k", "-ac", "2",
        "-movflags", "+faststart", tmp,
    ]
    if dry:
        return (path, size, None)
    subprocess.run(cmd, check=True)
    new_size = os.path.getsize(tmp)
    if new_size >= size * VIDEO_MIN_SAVING:
        os.remove(tmp)
        return (path, size, None)
    backup(path)
    os.replace(tmp, path)
    return (path, size, new_size)


def run_videos(dry):
    print("== Videos ==")
    ff = ffmpeg_exe()
    saved = 0
    kept = 0
    for p in walk(VID_EXT):
        r = encode_video(ff, p, dry)
        path, a, b = r
        rel = os.path.relpath(path, ASSETS)
        if b is None:
            kept += 1
            print(f"  {rel:70s} {mb(a):>9}  ({'dry run' if dry else 'kept, already small'})")
        else:
            saved += a - b
            print(f"  {rel:70s} {mb(a):>9} -> {mb(b):>9}")
    print(f"  {mb(saved)} saved, {kept} kept as is")
    return saved


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--images", action="store_true")
    ap.add_argument("--videos", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args()
    both = not (a.images or a.videos)
    total = 0
    if a.images or both:
        total += run_images(a.dry_run)
    if a.videos or both:
        total += run_videos(a.dry_run)
    print(f"\nTotal saved: {mb(total)}" + ("  (dry run, nothing written)" if a.dry_run else ""))
    if not a.dry_run:
        print(f"Originals backed up in {os.path.relpath(BACKUP_DIR, ROOT)} (git ignored).")
        print("Next: npx tsc --noEmit -p tsconfig.app.json && npm run build")


if __name__ == "__main__":
    main()
