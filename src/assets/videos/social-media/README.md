# Social Media Portfolio Videos

Drop video files directly in this folder — the portfolio section on the Social Media
Marketing page picks them up automatically, no code changes required.

## Supported formats
`.mp4`, `.webm`, `.mov`

## Filename convention
`Category__descriptive-title.mp4`

- Everything before `__` becomes the category badge (e.g. `Ecommerce`, `Restaurant`, `Fitness`).
- Everything after `__` becomes the video title, humanized from kebab-case
  (`product-launch-reel` → "Product Launch Reel").
- No `__` in the filename? It still works — category defaults to "Social Media"
  and the whole filename becomes the title.

Examples:
- `Ecommerce__product-launch-reel.mp4` → category "Ecommerce", title "Product Launch Reel"
- `Restaurant__behind-the-scenes.mp4` → category "Restaurant", title "Behind The Scenes"
- `brand-story.mp4` → category "Social Media", title "Brand Story"

## Optional thumbnail
Add an image with the exact same base filename in this same folder
(`.jpg`, `.jpeg`, `.png`, or `.webp`) and it's used as the video's poster/thumbnail.

`Ecommerce__product-launch-reel.mp4` + `Ecommerce__product-launch-reel.jpg`

If no matching image is found, the video's own first frame is used instead.
