# Technical SEO Audit — mediaso.pl

Date: 2026-08-27
Scope: https://mediaso.pl/ and known pages (/, /uslugi, /o-nas, /kontakt, /portfolio, /diagnostyka, /polityka-prywatnosci)
Stack confirmed live: Angular prerendered to static HTML, served by nginx/1.28.3 (Ubuntu) from a VPS. The `.htaccess` in `docs/` and `public/` is an Apache config left over from a prior PHP host — nginx serves the live site, so that file has no effect in production. All behavior below was verified against the live server, not against `.htaccess`.

**Technical score: 74/100**

---

## Summary of top issues

1. **Critical — `www.mediaso.pl` times out.** DNS has a dangling AAAA (IPv6) record with no working service behind it and no A record, so `https://www.mediaso.pl/` hangs for ~8s and fails instead of redirecting to the apex domain. Any backlink, business card, or manual typing of "www" loses the visitor and wastes crawl budget/link equity.
2. **High — No HSTS header.** HTTP→HTTPS redirect works (301), but without `Strict-Transport-Security` every first visit is a plaintext request, open to downgrade/interception before the redirect fires.
3. **High — No Content-Security-Policy header.** No CSP anywhere in the response chain.
4. **Medium — Bloated inline `@font-face` CSS on every page.** 74 `@font-face` declarations (Cormorant Garamond + Inter, covering Cyrillic/Greek/Vietnamese/Latin-extended unicode ranges the Polish content never uses) are inlined in `<head>` on every prerendered page, pushing raw HTML to ~73 KB (13 KB gzipped) before any content. This is Angular's Beasties critical-CSS step pulling in the full Google Fonts response instead of a subset.
5. **Low — No IndexNow key file / pings**, missing `Permissions-Policy` header.

Everything else — crawlability, sitemap, canonicals, meta robots, redirect behavior on the apex domain, structured data, JS payload size — checks out clean.

---

## 1. Crawlability

**Status: Pass**

- `robots.txt` (200, `text/plain`): permissive, correctly scoped.
  ```
  User-agent: *
  Allow: /
  Disallow: /api/
  Sitemap: https://mediaso.pl/sitemap.xml
  ```
  `Disallow: /api/` is correct — that path serves the PHP contact-form endpoint, not content.
- Sitemap declared in robots.txt and verified valid via `sitemap_discovery.py`: `https://mediaso.pl/sitemap.xml` returns 200, valid `urlset`, no fallback paths needed (`sitemap_index.xml`, `wp-sitemap.xml` etc. correctly absent, 404).
- Sitemap contains exactly the 5 indexable URLs (`/`, `/uslugi`, `/o-nas`, `/kontakt`, `/diagnostyka`), each with `<lastmod>`. `/portfolio` and `/polityka-prywatnosci` are correctly *excluded* because both carry `noindex, follow` — this is consistent, not a bug.
- No `noindex` on any page that should be indexed; no orphaned or accidentally blocked indexable URLs found.

**Recommendation:** none required. Optional: add `<lastmod>` with actual content-change dates rather than build date if the two drift over time — currently both look sourced from the deploy job, which is fine as long as it reflects real content changes.

## 2. Indexability

**Status: Pass**

- Canonical tags present and self-referencing (absolute, HTTPS, no trailing slash) on all pages checked:
  - `/` → `https://mediaso.pl/`
  - `/uslugi` → `https://mediaso.pl/uslugi`
  - `/portfolio` → `https://mediaso.pl/portfolio` (with `noindex, follow` — correct pattern for a page you still want link equity to flow through but not ranking on its own, assuming portfolio content is thin/duplicative)
  - `/polityka-prywatnosci` → `https://mediaso.pl/polityka-prywatnosci` (`noindex, follow` — correct, standard for privacy policy)
- No index bloat: 5 indexable URLs, sitemap matches live indexable set exactly. No parameter/duplicate URL variants found.
- Unique `<title>`, meta description, and `<h1>` confirmed on all 5 indexable pages — no duplication.
- `meta robots` on indexable pages: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` — correct, no accidental blocks.

**Recommendation:** none required.

## 3. Security

**Status: Fail — 2 High findings**

Headers observed on live responses (home page and `/uslugi` identical):
```
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
X-Frame-Options: SAMEORIGIN
```
Missing:
- **`Strict-Transport-Security` (High).** HTTP is redirected to HTTPS (301, verified), but with no HSTS header the browser has no instruction to force HTTPS on subsequent or first visits, leaving a window for downgrade attacks and for any stray HTTP link/bookmark to leak a plaintext request. `.htaccess` doesn't set it either, but that's moot since nginx serves the site.
  - **Fix:** add to nginx server block (after confirming all subdomains and assets are HTTPS-only):
    ```nginx
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    ```
    Hold off on `preload` until HSTS has run clean for a few weeks and the `www` DNS issue (below) is fixed, since preload lists apply to the whole domain including subdomains.
- **`Content-Security-Policy` (High).** Absent entirely. Given the site loads Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) and presumably analytics/tag manager scripts, a CSP is straightforward to scope:
  ```nginx
  add_header Content-Security-Policy "default-src 'self'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com; img-src 'self' data:; script-src 'self'; connect-src 'self'; base-uri 'self'; frame-ancestors 'self'" always;
  ```
  Adjust `script-src`/`connect-src` for any third-party analytics/pixels actually in use (not visible in the raw prerendered HTML — check the live `main-*.js` bundle for injected tags before shipping this).
- **`Permissions-Policy` (Low).** Not set. Add a baseline deny-list for unused APIs (`geolocation=(), camera=(), microphone=()`) — low impact but free to add alongside the CSP change.
- HTTPS itself is fine: valid redirect chain on the apex domain, TLS terminates on nginx.

## 4. URL Structure & Redirects

**Status: Mixed — 1 Critical finding, otherwise pass**

Verified live (not from `.htaccess`, which is inert):

| Check | Result |
|---|---|
| `http://mediaso.pl/` → | 301 → `https://mediaso.pl/` ✓ |
| `https://mediaso.pl/kontakt/` (trailing slash) → | 301 → `https://mediaso.pl/kontakt` ✓ |
| Same trailing-slash redirect confirmed on `/uslugi/`, `/o-nas/`, `/diagnostyka/`, `/portfolio/`, `/polityka-prywatnosci/` | all 301 → canonical no-slash form ✓ |
| Non-existent URL (`/nonexistent-page-xyz`) | 404 ✓ (not soft-404, not 200) |
| Uppercase path (`/USLUGI`) | 404 ✓ (case-sensitive, no duplicate-content risk from case variants) |
| `https://www.mediaso.pl/` | **Connection timeout (Critical, see below)** |
| `http://www.mediaso.pl/` | Connection timeout, same root cause |

**Critical — `www.mediaso.pl` is a dead subdomain.**
```
www.mediaso.pl  →  AAAA 2001:41d0:601:1100::9576   (IPv6, times out — nothing listening)
                    no A record
mediaso.pl      →  A    54.38.204.179               (IPv4, live, correct)
```
`.htaccess` has rewrite rules to 301 `www` → apex, but since nginx (not Apache) serves the site and there's no IP the `www` hostname even resolves to reliably, that redirect never executes — the request just hangs and eventually times out. Any inbound link, print material, or manually typed `www.mediaso.pl` currently fails outright rather than redirecting.

**Fix (pick one):**
1. Point `www.mediaso.pl` A/AAAA records at the same VPS IP as the apex and add an nginx server block that 301-redirects `www` → apex (mirroring the `.htaccess` intent), or
2. Remove the dangling AAAA record if `www` isn't meant to resolve at all, and rely on the apex-only setup — cleaner if `www` is never advertised anywhere.

Given the `.htaccess` explicitly encodes "canonical domain without www" as the intent, option 1 (working 301) is safer — it protects any existing/future backlinks or typed traffic that assume `www` works, which a flat DNS failure does not.

## 5. Mobile-Friendliness

**Status: Pass**

- Viewport meta present and correct on every page: `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- No fixed-width containers or `user-scalable=no` found in source.
- Font sizing uses relative units (`clamp()`, `vh`) in the hero component — responsive by construction.
- Homepage `<img>` usage (logo only, appears twice: navbar + footer) ships explicit `width="127" height="28"` — no CLS risk from unsized images.

No touch-target-size or tap-spacing violations detectable from static source; recommend a manual mobile-usability pass (Chrome DevTools device toolbar) for the hero CTA and nav toggle, which weren't inspectable from HTML/CSS alone.

## 6. Core Web Vitals (source-level signals)

**Status: Mostly good, one Medium finding**

- **JS payload is light:** `main-EFUKFUZR.js` = 17.5 KB raw / 5.7 KB gzipped, `polyfills-RV3JTMEC.js` = 35.8 KB raw. Both served with `Cache-Control: public, immutable, max-age=31536000` and hashed filenames — correct long-term caching, good for repeat-visit INP/LCP.
- **No LCP-blocking hero image:** the hero uses CSS gradients + inline SVG (`.hero-bg`, `.hero-ecg`), not a large raster image, so there's no oversized hero PNG/JPG to optimize or preload.
- **Medium — inline font CSS bloats every page's HTML.** 74 `@font-face` rules (all weights/styles of Cormorant Garamond and Inter, split across Latin/Cyrillic/Greek/Vietnamese unicode ranges) are inlined directly in `<head>` by the prerender build (Beasties), on every one of the 5+ pages. Raw HTML is ~73 KB, of which the large majority is this font CSS block. Gzip brings it to ~13 KB, so the network cost is contained, but:
  - It's dead weight — a Polish-only site doesn't need Cyrillic/Greek/Vietnamese subsets.
  - It's duplicated per-page instead of being cacheable once (inline CSS can't be cached separately from the HTML document).
  - It adds parse/layout work in `<head>` before first paint on every navigation.
  - **Fix:** constrain the Google Fonts request to the subsets actually used, e.g. `family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300..600;1,300..400&subset=latin,latin-ext&display=swap`, then let Beasties inline only that trimmed CSS. This alone should cut the inlined block by roughly 80%.
- No `<link rel="preload">` for fonts — with `font-display: swap` already set, this is a minor optimization opportunity (preloading the 2-3 fonts actually rendered above the fold) rather than a defect.
- CLS: no unsized images, no injected banners/cookie-consent bar detected in source, hero uses `min-height: max(560px, 100vh - var(--nav-height))` which is stable once CSS custom properties resolve — low CLS risk from source inspection. Recommend confirming with real-user CrUX data once traffic volume supports it (currently unverifiable from source alone, and no CrUX/PageSpeed field data was available for this check).
- INP: nothing in source suggests heavy main-thread work (no large synchronous scripts, small bundle) — low risk.

## 7. Structured Data

**Status: Pass**

Homepage and `/uslugi` both carry valid JSON-LD (`@graph`) with:
- `Organization` (name, logo with width/height, contact points, `areaServed: Polska`)
- `WebSite`
- `Service` / `OfferCatalog` / `Offer`
- `WebPage` and, on `/uslugi`, `BreadcrumbList`

All blocks parsed as valid by the structured-data check, no errors, no truncation. No `LocalBusiness`/`MedicalBusiness` schema needed here since mediaso itself isn't the medical facility — `Organization` is the right type for a marketing agency.

**Recommendation:** consider adding `FAQPage` schema to `/diagnostyka` if that page contains a real Q&A pattern (the 20-question growth diagnostic) — optional enhancement, not a defect.

## 8. JavaScript Rendering

**Status: Pass**

- Confirmed server-side prerendered: raw HTTP fetch (no JS execution) returns full content, real `<h1>`, real text, populated JSON-LD. `render_page.py --mode auto` correctly detected `is_spa: false` on all pages tested.
- Angular hydrates client-side after load (`main-*.js`, `polyfills-*.js` loaded as `type="module"`), but content is fully present pre-hydration — no crawler dependent on JS execution is needed to read this site. This is the correct pattern for a marketing site prioritizing crawlability.

## 9. IndexNow Protocol

**Status: Not implemented (Low)**

No IndexNow key file found (`/indexnow-key.txt` → 404) and no evidence of ping submission. Given the site's small page count and low publish velocity, this is low-priority, but cheap to add:
1. Generate a key, publish it at `https://mediaso.pl/<key>.txt`.
2. Ping `https://api.indexnow.org/indexnow?url=...&key=...` on deploy (the deploy pipeline already regenerates `sitemap.xml` per the `<lastmod>` dates, so hooking a POST into that same job is a small addition).
3. Bing/Yandex/Naver pick up changes near-instantly instead of waiting for organic crawl — most useful once new pages ship (Instagram/service pages), less impactful for tweaks to the existing 5 pages.

## 10. Hreflang / PL-EN toggle

Not evaluated for hreflang implementation — the PL/EN toggle in the navbar is a client-side language convenience for visitors, not a separate crawlable URL structure (no `/en/` paths, no `hreflang` alternates found in source, both by design). No action needed here.

---

## Issues by severity

**Critical**
- `www.mediaso.pl` DNS points to a non-responsive IPv6-only host with no working redirect — fix DNS/nginx server block (Section 4).

**High**
- Missing `Strict-Transport-Security` header (Section 3).
- Missing `Content-Security-Policy` header (Section 3).

**Medium**
- Inline `@font-face` CSS bloat (unused Cyrillic/Greek/Vietnamese subsets) inflating every page's `<head>` (Section 6).

**Low**
- Missing `Permissions-Policy` header (Section 3).
- No IndexNow key/pings (Section 9).
- No font preload for above-the-fold text (Section 6, minor).

**Passing / no action needed**
- robots.txt, sitemap.xml, canonicals, meta robots, indexability, redirect chains on the apex domain, structured data, JS rendering/prerendering, mobile viewport, image dimensions, JS bundle size and caching.
