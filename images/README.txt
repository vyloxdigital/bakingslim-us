BakingSlim — images folder
==========================

Drop your nine image files into this folder, using these exact filenames.
The page references these and nothing else.

File                                   Used where                  Rendered box    Suggested source size
-------------------------------------  --------------------------  --------------  ---------------------
bakingslim-hero.webp                   Hero (LCP image)            1120 x 840 (4:3) 2240 x 1680
bakingslim-2-bottles-guarantee.webp    Price staircase, step 1      400 x 400 (1:1)   800 x 800
bakingslim-3-bottles-guarantee.webp    Price staircase, step 2      400 x 400 (1:1)   800 x 800
bakingslim-6-bottles-guarantee.webp    Price staircase, step 3      400 x 400 (1:1)   800 x 800
bakingslim-review-1.webp               Photographs, first           560 x 420 (4:3)  1120 x 840
bakingslim-review-2.webp               Photographs, second          560 x 420 (4:3)  1120 x 840
bakingslim-review-3.webp               Photographs, third           560 x 420 (4:3)  1120 x 840
bakingslim-guarantee.webp              Refund section seal          400 x 400 (1:1)   800 x 800
favicon.png                            Browser tab + app icon       any              512 x 512

Notes
-----

1. Every image slot uses a fixed CSS aspect-ratio with object-fit: contain.
   Your real files do NOT have to match the ratios above exactly: nothing
   stretches or crops, and the layout will not shift while images load
   (cumulative layout shift stays at zero). Matching the ratio only makes the
   box sit more tightly around the artwork.

2. bakingslim-hero.webp is the Largest Contentful Paint image. It is preloaded
   with fetchpriority="high" and sits in a wide 4:3 frame, so it is the one
   file worth compressing hardest — aim for under 80 KB. The other seven are
   lazy-loaded and matter far less.

3. bakingslim-review-2.webp is captioned as the badge row (non-GMO, made in
   USA, GMP certified). If your second photo shows something else, swap the
   FILES around rather than editing the HTML, or tell me and I'll change the
   caption.

4. Keep the .webp extension. The filenames appear in index.html, sitemap.xml
   and the Open Graph / Twitter meta tags; renaming one means editing three.

5. favicon.png should be a square PNG. 512 x 512 covers both the browser tab
   and the Android home-screen icon declared in manifest.json.

6. Export WebP at quality 78-82. Past that the file grows without a visible
   gain at these rendered sizes.
