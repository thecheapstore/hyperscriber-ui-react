# Asset optimization: steps for adding images and videos

Heavy images and videos are the biggest cause of slow pages and slow deploys. This repo has one script that handles both, and the rules below keep new uploads from undoing the work.

## One time setup (per computer)

```bash
py -m pip install pillow imageio-ffmpeg
```

`pillow` converts images. `imageio-ffmpeg` bundles an ffmpeg binary, so nothing else needs installing.

## Every time you add or change images or videos

1. Put the original file in `src/assets/...` exactly as you received it. Use a descriptive kebab case name that contains the subject and keyword, for example `arborix-tree-services-desktop-homepage.png`.
2. Preview what will change:

   ```bash
   py scripts/optimize_assets.py --dry-run
   ```

3. Run the optimizer. It backs up every original first, then converts:

   ```bash
   py scripts/optimize_assets.py            # images and videos
   py scripts/optimize_assets.py --images   # images only (fast)
   py scripts/optimize_assets.py --videos   # videos only (slow, uses all CPU cores)
   ```

4. Check the result:

   ```bash
   npx tsc --noEmit -p tsconfig.app.json
   npm run build
   ```

   The build runs the prerender step, which fails if a page loses its title, canonical, H1 or structured data, and the build itself fails if an import points at a file that no longer exists.
5. Look at the page in the browser, then commit. Commit the converted files and the changed imports together.

## What the script does

| Type | Rule |
| --- | --- |
| PNG, JPG, JPEG | Converted to WebP at quality 80. Maximum width 1600 px, 800 px for files with `logo` in the name. A file is only replaced if the WebP is under 80 percent of the original size, and files under 20 KB are left alone. |
| Imports | Every import path, `import.meta.glob` pattern and name lookup in `src/` is rewritten to the new `.webp` name automatically. |
| MP4 | Re-encoded with H.264, CRF 29, 576 px wide (1080 px for brand identity reels), faststart, 80 kbps audio. A file is only replaced if the new one is under 90 percent of the original. The file name does not change, so no code changes are needed. |
| Backups | Originals are copied to `_creatives/asset-originals/` (git ignored) before anything changes, and the video pass always encodes from that backup so quality is never lost twice. |
| Safe to repeat | Files that are already optimized are skipped. |

To restore an original, copy it back from `_creatives/asset-originals/` and delete the `.webp`, then fix the import.

## Rules when you write the page code

- Every `<img>` needs a descriptive `alt` (eight to sixteen words, what is shown plus the business and service), plus `width` and `height`. Add `loading="lazy"` and `decoding="async"` to anything below the fold. Only the single largest image above the fold gets `fetchPriority="high"`.
- Decorative images get `alt=""`.
- Videos use `preload="metadata"` (never `auto`), a `poster` image and no autoplay with sound. Mount the real `<video>` only when the card is on screen or clicked.
- Never import an original camera or design export (a 4 MB PNG screenshot, a 1080p reel for a 300 px card). Run the optimizer first.
- Social images (`og:image`) should stay 1200 by 630. The site default is `public/og/calibre-associates-og.png`. Case studies use their project image, which is now WebP.
- Do not put images in `public/` unless a file must keep an exact URL (favicons, the Open Graph image). Files in `src/assets` get a content hash and long cache headers.

## Sizes to aim for

| Use | Target |
| --- | --- |
| Hero or case study image | under 250 KB |
| Card thumbnail or gallery image | under 150 KB |
| Logo | under 40 KB |
| Short vertical video shown in a card | under 4 MB, 576 px wide |
| Anything over 8 MB | host it on YouTube or a video CDN instead of the repo |

## Results of the first optimization pass (4 October 2026)

- Images: 76 files converted, 83.8 MB down to 13.6 MB (84 percent smaller).
- Videos: 34 files re-encoded, 249.6 MB down to 111 MB (55 percent smaller). Five files that were already small were left alone. Frames compared before and after are visually indistinguishable at card size.
- `src/assets` went from 343 MB to 125 MB.
- Two original images were not referenced anywhere in the code and were converted along with the rest (`kishoram` and `manasvi-thumbnail`). They can be deleted if they are not needed.
