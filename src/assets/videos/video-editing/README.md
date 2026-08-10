# Video Editing Portfolio Videos

Drop video files directly in this folder, the portfolio section on the Video Editing
page picks them up automatically, no code changes required.

## Supported formats
`.mp4`, `.webm`, `.mov`

## Filename convention
`Category__descriptive-title.mp4`

- Everything before `__` becomes the category badge and drives the filter tabs.
- Everything after `__` becomes the video title, humanized from kebab-case
  (`product-launch-reel` → "Product Launch Reel").
- No `__` in the filename? It still works, category defaults to "YouTube" and the
  whole filename becomes the title.

## Category tokens (use exactly these, case-insensitive)
- `UGC`
- `Real-Estate`
- `Healthcare`
- `Education`
- `AI-Videos`
- `YouTube`

Anything else is still accepted and shown as its own filter tab (humanized), so new
categories work without a code change, but the six above are the ones the page's
"All" filter bar is designed around.

Examples:
- `UGC__unboxing-reel.mp4` → category "UGC", title "Unboxing Reel"
- `Real-Estate__luxury-condo-walkthrough.mp4` → category "Real Estate", title "Luxury Condo Walkthrough"
- `AI-Videos__ai-avatar-explainer.mp4` → category "AI Videos", title "Ai Avatar Explainer"

## Optional thumbnail
Add an image with the exact same base filename in this same folder
(`.jpg`, `.jpeg`, `.png`, or `.webp`) and it's used as the video's poster/thumbnail.

`UGC__unboxing-reel.mp4` + `UGC__unboxing-reel.jpg`

If no matching image is found, the video's own first frame is used instead.

## Optional description
Each card shows a short one-line description under the title. If you want a specific
line instead of the category's default description, add an entry to the
`DESCRIPTION_OVERRIDES` map in `src/components/services/data/videoEditingVideos.ts`,
keyed by the video's base filename.
