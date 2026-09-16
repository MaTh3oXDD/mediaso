# Performance / Core Web Vitals — mediaso.pl

**Data source: Lighthouse 12.8.2 lab runs only (mobile emulation, simulated throttling), captured 2026-08-27.**
No CrUX or GSC credentials were available for this audit — every number below is a single lab run, not the 75th-percentile field data Google actually uses to grade Core Web Vitals. Lab numbers, especially LCP, run pessimistic under Lighthouse's default mobile CPU/network throttling; treat these as a diagnostic ceiling, not a verdict on real-user pass/fail. Recommend pulling CrUX (or PSI field data) once traffic/API access allows.

Pages tested: `https://mediaso.pl/` (homepage) and `https://mediaso.pl/uslugi` (services).

## Scores and lab metrics

| Metric | Homepage | /uslugi | Good threshold |
|---|---|---|---|
| Performance score | 80/100 | 91/100 | — |
| LCP | 3.8 s | 2.8 s | ≤2.5 s |
| CLS | 0 | 0 | ≤0.1 |
| TBT (INP proxy) | 0 ms | 0 ms | — |
| Speed Index | 3.9 s | 2.9 s | — |
| TTFB (server-response-time audit) | 20 ms | 10 ms | ≤800 ms |

CLS is a clean pass on both pages — no layout-shift issues found (logo `<img>` ships with explicit `width="127" height="28"`, no late-injected content observed).

TBT is 0 ms on both pages, which is a good INP proxy in lab conditions, but **there is no real INP field data** — this cannot be reported as a pass/fail against the 200 ms INP threshold without CrUX.

## LCP — Severity: High

Both pages fail the 2.5 s "good" LCP threshold in this lab run.

- **LCP element on both pages is not an image.** Homepage LCP element is the 127×28 navbar logo (`<img src="MediasoLogo.svg">`, 2.7 KB); on `/uslugi` it's a paragraph of hero subtitle text. Neither is a heavy image — so LCP is not an image-weight problem on these two pages.
- **LCP breakdown (Lighthouse's own phase split):**
  - Homepage: TTFB 604 ms (16%), Load Delay 0 ms, Load Time 0 ms, **Render Delay 3,177 ms (84%)**
  - /uslugi: TTFB 603 ms (22%), Render Delay 2,183 ms (78%)
- The bottleneck is render delay, not resource loading. Root cause is main-thread contention during Angular bootstrap: the homepage trace shows 2,116 tasks totaling 1,502 ms of task time before paint, with `polyfills-RV3JTMEC.js` alone attributed 3,092 ms of "total" time (1,833 ms scripting) in the bootup-time audit, plus a further 2,380 ms attributed to the document itself. The prerendered HTML has the logo markup ready at byte 1, but paint is gated behind JS execution/hydration finishing, not behind image or font fetch.
- Fix priority:
  1. **Verify differential/legacy build output.** A 35.8 KB raw (14.6 KB gzip) polyfills bundle consuming ~1.8 s of scripting time in a modern-browser test is disproportionate. Confirm `angular.json` browserslist targets evergreen browsers only and that legacy polyfills (zone.js patches, core-js) aren't being shipped unconditionally to all users. Check with `ng build --stats-json` + bundle analyzer.
  2. **Reduce main-thread work at bootstrap.** Defer non-critical component initialization, check for synchronous work in `APP_INITIALIZER`/root component constructors, and confirm hydration (`provideClientHydration`) isn't doing a full re-render of already-prerendered markup.
  3. Since the app is prerendered/static, consider serving the hero content with zero JS dependency for first paint (it already is markup-wise) and auditing why paint waits on script execution rather than the parser — check for blocking `<script>` tags without `defer`/`type=module` ordering issues.

## Render-blocking resources — Severity: Low

Lighthouse's `render-blocking-resources` and `font-display` audits both pass (score 1) — the Google Fonts stylesheet uses `display=swap` and isn't flagged as a meaningful blocking cost by Lighthouse's own savings threshold. Not a priority relative to the LCP render-delay issue above, but see font payload note below.

## Font loading — Severity: Medium

`src/index.html` loads fonts via a single `fonts.googleapis.com/css2` request covering **two families** (Cormorant Garamond: weights 300/400/600 + italics; Inter: weights 300/400/500/600/700 + italics) with `rel=preconnect` already set for both `fonts.googleapis.com` and `fonts.gstatic.com` (good).

- Homepage downloads **4 Inter woff2 files totaling 177 KB transfer** (277 KB uncompressed) before first paint stabilizes. `/uslugi` downloads 2 of the same files (~134 KB transfer). Cormorant Garamond files were not observed loading on either tested page — check whether that family is actually used in the current design; if not, drop it from the `@import`/link URL entirely.
- Fixes:
  1. Audit actual weights/styles used in the deployed CSS and trim the Google Fonts URL to only those (e.g. if only Inter 400/600 render, drop 300/500/700/italics — each unused weight is a separate 40-90 KB file request).
  2. Self-host the subset via `@font-face` + `font-display: swap` to remove the `fonts.googleapis.com` → `fonts.gstatic.com` two-hop lookup, or at minimum add `<link rel="preload" as="font" type="font/woff2" crossorigin>` for the exact woff2 URLs actually used above the fold.
  3. Confirm Cormorant Garamond is intentionally kept if unused on these two routes — if it's only used elsewhere (e.g. About page), that's fine, but if it's dead weight in the shared `<head>`, remove it site-wide.

## Hero image assets (hero-bg.png / hero-ekg.gif) — Severity: Informational (appears resolved)

The brief flagged `hero-bg.png` (527 KB) and `hero-ekg.gif` as assets to check. Verified two ways:

1. **Network trace**: neither file appears in the captured requests for `/` or `/uslugi` (full request lists below — 16 and 14 requests respectively, no PNG/GIF present).
2. **Source search**: `grep -rn "hero-bg\|hero-ekg"` across `src/` and `docs/` returns no matches, and no `hero-*.png`/`hero-*.gif` file exists anywhere in the working tree.

Conclusion: these assets do not ship to users on the current build of either page — they've either already been replaced by the EKG/SVG hero treatment referenced in recent commits or never existed in this checkout. No action needed here, but worth a final visual QA pass on the live homepage hero section to confirm the replacement asset (if any) is lightweight and in a modern format (WebP/AVIF/SVG), since it wasn't captured in this crawl.

## JavaScript payload — Severity: Medium

Total JS transferred on first load:

| Page | JS files | Transfer | Uncompressed |
|---|---|---|---|
| Homepage | 7 scripts | ~171 KB | ~443 KB |
| /uslugi | 8 scripts | ~139 KB | ~404 KB |

Largest single chunk on both pages: `chunk-XUXLWVSP.js` at 69 KB transfer / 176 KB raw — loaded on both homepage and /uslugi, so it's shared/core rather than route-specific. This is materially heavier than the "~101 KB transfer initial bundle" figure previously assumed for this build; recommend re-running `ng build --stats-json` + `webpack-bundle-analyzer` (or Angular's built-in budget report) to see what's inflated `chunk-XUXLWVSP.js` and whether it can be split further or lazy-loaded per route.

- `mainthread-work-breakdown` scores 0.5 (6.0 s of main-thread work) and `bootup-time` scores 0.5 (2.3 s) on the homepage — both flagged as needing improvement, consistent with the LCP render-delay finding above.

## nginx-level findings

### HTTP/2 not in use — Severity: High
Lighthouse's `uses-http2` audit fails on both pages: **every first-party request (12 on homepage, 13 on /uslugi) is served over `http/1.1`**, while only the third-party `fonts.gstatic.com` requests use `h2`. Response headers confirm: `curl` against `https://mediaso.pl/` and its JS chunks report `HTTP/1.1` from `nginx/1.28.3 (Ubuntu)`.
- With 7-8 first-party scripts plus CSS/logo/icon/favicon all forced onto HTTP/1.1's per-origin connection limit (browsers cap ~6 concurrent connections), requests queue instead of multiplexing, adding avoidable latency to every page load — this compounds the render-delay problem above since polyfills/main/chunks are all competing for the same 6 slots.
- Fix: enable HTTP/2 (or HTTP/3/QUIC) in the nginx TLS server block — `listen 443 ssl http2;` (or `http2 on;` directive syntax depending on nginx 1.25+ config style) and confirm ALPN negotiates `h2` in production, not just that the directive is present.

### Compression — Severity: Low (already good, one improvement available)
`Content-Encoding: gzip` is present on both HTML and JS responses (`Vary: Accept-Encoding` set correctly). No compression gap found. Consider adding **Brotli** (`ngx_brotli` module) for an additional 15-20% size reduction over gzip on text assets, since Brotli is essentially free on already-built static output.

### Caching — Severity: Low (already good)
Hashed static assets (`chunk-*.js`) are served with `Cache-Control: public, immutable, max-age=31536000` and a matching far-future `Expires` header — correct for content-hashed filenames. HTML is served with `ETag`/`Last-Modified` validators and no explicit `Cache-Control`, which is appropriate for a document that changes on redeploy. No action needed.

## Prioritized action list

1. **High / LCP** — Investigate why ~2-3 s of render delay happens before first paint despite prerendered HTML; check polyfill bundle size/necessity and hydration behavior on app bootstrap.
2. **High / nginx** — Turn on HTTP/2 (confirm ALPN negotiates `h2` in production, not just config presence).
3. **Medium / Fonts** — Trim unused Google Fonts weights/styles; self-host or preload the woff2 files actually rendered above the fold.
4. **Medium / JS** — Bundle-analyze `chunk-XUXLWVSP.js` (69 KB transfer, shared across routes) for split/lazy-load opportunities; re-baseline the "initial bundle" size claim against current build output.
5. **Low / nginx** — Add Brotli alongside gzip.
6. **Informational** — hero-bg.png/hero-ekg.gif confirmed not shipping on these two pages; no fix needed, just confirm visually.

## Raw request inventory (for reference)

Homepage (`/`) — 16 requests, 470 KB total transfer:
`mediaso.pl/` (13.4 KB, html) · `MediasoLogo.svg` (2.8 KB) · `chunk-UENART6H.js` (31.6 KB) · `chunk-F2WK3VH5.js` (8.2 KB) · `chunk-BYGJ32ST.js` (3.0 KB) · `chunk-XUXLWVSP.js` (69.4 KB) · `polyfills-RV3JTMEC.js` (14.6 KB) · `main-EFUKFUZR.js` (6.2 KB) · `chunk-EGW25JGR.js` (38.3 KB) · `styles-DC4GRRO4.css` (1.4 KB) · 4× Inter woff2 (48.8/52.0/85.2/92.1 KB) · `icon-m.svg` (0.9 KB) · `favicon.ico` (2.4 KB)

`/uslugi` — 14 requests, 291 KB total transfer:
`mediaso.pl/uslugi` (11.3 KB, html) · `MediasoLogo.svg` (2.8 KB) · `chunk-UENART6H.js` (31.6 KB) · `chunk-F2WK3VH5.js` (8.2 KB) · `chunk-BYGJ32ST.js` (3.0 KB) · `chunk-XUXLWVSP.js` (69.4 KB) · `polyfills-RV3JTMEC.js` (14.6 KB) · `main-EFUKFUZR.js` (6.2 KB) · `chunk-VKBHTVKE.js` (3.7 KB) · `chunk-POUW2USK.js` (1.2 KB) · `styles-DC4GRRO4.css` (1.4 KB) · 2× Inter woff2 (48.8/85.2 KB) · `icon-m.svg` (0.9 KB) · `favicon.ico` (2.4 KB)
