# Sitemap Audit — mediaso.pl

Source: `public/sitemap.xml` (Angular static asset, copied verbatim to `docs/sitemap.xml` at build). Byte-identical in both locations — the docs/ copy is not a separate risk, it's the same file.

## Validation Summary

| Check | Result |
|---|---|
| XML well-formed | Pass |
| URL count | 5 — well under the 50,000/50MB cap |
| `priority` / `changefreq` tags | Not present — correct, both are ignored by Google, nothing to remove |
| `lastmod` format | Valid W3C date (`YYYY-MM-DD`) on all 5 entries |
| `lastmod` accuracy | Fail — see below |
| Non-200 / redirected URLs | None of the 5 listed URLs are broken |
| Noindexed URLs in sitemap | None — correct |
| robots.txt reference | Present and correct (`Sitemap: https://mediaso.pl/sitemap.xml` in `public/robots.txt`) |

## Coverage vs. Crawlable Routes

Routes defined in `src/app/app.routes.ts` and prerendered per `docs/prerendered-routes.json`:

| Route | In sitemap | `noindex` in routes.ts | Verdict |
|---|---|---|---|
| `/` | Yes | No | Correct |
| `/uslugi` | Yes | No | Correct |
| `/o-nas` | Yes | No | Correct |
| `/kontakt` | Yes | No | Correct |
| `/diagnostyka` | Yes | No | Correct |
| `/portfolio` | No | **Yes** (explicit) | Correct — see note |
| `/polityka-prywatnosci` | No | **Yes** (explicit) | Correct |

**Correction to the brief's premise:** `/portfolio` is not an oversight. `app.routes.ts` sets `data: { seo: 'portfolio', noindex: true }` with an inline comment: *"Strona bez realizacji nie ma czego oferowac w wynikach wyszukiwania. Pusty wynik w indeksie obniza ocene calej domeny - wraca po dodaniu tresci"* (a page with no case studies has nothing to offer search, and an empty result in the index would drag down the whole domain — add it back once there's content). `SeoService` applies `noindex, follow` on that route. Sitemaps should only contain indexable URLs, so keeping `/portfolio` out is the right call, not a gap. Same logic applies to `/polityka-prywatnosci` (privacy policy, correctly noindexed and correctly excluded).

One real inconsistency worth fixing: `/portfolio` is commented out of the main navbar (`navbar.component.html`) but still live and uncommented in the footer nav (`footer.component.html`). That's not a sitemap defect — noindexed pages are allowed to be linked — but it does mean the "hidden" page is still one click away sitewide, which somewhat undercuts the intent of hiding it from the main nav. If the goal is to keep it fully out of sight until content exists, pull the footer link too; if it's fine as a soft-launched page, no action needed.

No pages exist in the crawl that are missing from the sitemap. Coverage is 100% of intended-indexable routes.

## lastmod Accuracy

All 5 URLs share the identical value `2026-08-24`, applied in a single commit (`cb085fd`, "fix favicon") that added the file wholesale. Today is 2026-08-27. Two problems:

1. **Identical lastmod across all URLs is a low-severity smell** — it signals a batch-generated or hand-set date rather than one reflecting each page's actual last significant edit.
2. **The date will silently go stale.** The file is static, not templated or generated at build time — nothing in the repo regenerates it. `src/app/core/seo/site.config.ts` even carries a comment flagging this as a manual chore: *"Zmiana domeny wymaga też podmiany URL-i w public/sitemap.xml i public/robots.txt"* (changing the domain also requires manually swapping URLs in these files). Every future content edit to `/uslugi`, `/o-nas`, etc. won't touch `lastmod` unless someone remembers to hand-edit the XML. lastmod then stops being a signal Google can trust and is better removed than left wrong — Google explicitly downweights sitemaps with unreliable lastmod.

## Hand-Maintained: What That Implies

`public/sitemap.xml` is a static file with one commit in its history, no generator script, no npm script, no CI step, no dynamic route enumeration found anywhere in the repo (`grep -ril sitemap` across `.ts/.js/.json` outside `docs/` and `node_modules` returns only `site.config.ts`, which is unrelated config, not a generator). This means:

- Adding a new route requires a developer to remember to also hand-edit `public/sitemap.xml`. There's no build-time guard that would fail if a route and the sitemap diverge.
- The `noindex: true` flag in `app.routes.ts` is the single source of truth for indexability today, but the sitemap doesn't read it — someone has to manually keep the two in sync. Today they happen to agree; there's no mechanism forcing that to stay true.
- This is fine at 5 URLs. It stops being fine once service subpages and a blog exist (see below) — manual sync at that scale is where sitemaps drift and accumulate 404s/noindexed leftovers.

## Recommended Sitemap — Current State

Keep it simple and drop `lastmod` rather than let it lie, or wire it to actual content-change dates if that's low effort:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://mediaso.pl/</loc></url>
  <url><loc>https://mediaso.pl/uslugi</loc></url>
  <url><loc>https://mediaso.pl/o-nas</loc></url>
  <url><loc>https://mediaso.pl/kontakt</loc></url>
  <url><loc>https://mediaso.pl/diagnostyka</loc></url>
</urlset>
```

If lastmod is kept, source it from git (`git log -1 --format=%cs -- <file>` per page component) or a CMS field at build time so it reflects real edits, not a copy-paste date.

## Structure for Growth: Service Pages + Blog

`/uslugi` is currently a single flat services page. Per the site's own note (`site.config.ts` `SeoPageKey`), there's no per-service route yet. Two additions are coming based on the brief:

**1. Service subpages** (e.g. `/uslugi/seo-medyczne`, `/uslugi/kampanie-google`, `/uslugi/social-media` — whatever the actual service split ends up being). These are "safe at scale" per the quality gates (real, differentiated service descriptions, not templated swaps), so no location-page-style warning applies. Add each as its own `<url>` entry as it ships. At this volume (single-digit to low-double-digit services) they stay in the main sitemap.

**2. Blog.** Once post count grows past roughly 20-30, move it into its own sitemap file (`sitemap-posts.xml`) referenced from a sitemap index, so the two content types don't get harder to reason about together and blog churn doesn't bury the low-change-frequency service pages:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://mediaso.pl/sitemap-pages.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://mediaso.pl/sitemap-posts.xml</loc>
  </sitemap>
</sitemapindex>
```

For the blog specifically:
- lastmod matters more here than on static pages — it should reflect real edits, not publish date frozen forever, and definitely not a batch-set value.
- No `priority`/`changefreq` — same as now, Google ignores both.
- Exclude draft/scheduled posts and any tag/category archive pages unless they carry genuinely unique content — those are the kind of thin, templated pages that trip the doorway-page pattern the quality gates flag.

**On generation:** once service subpages and blog posts exist, hand-editing one static XML file stops scaling — that's exactly the failure mode this audit is flagging for the current 5-URL file, and it only gets worse with more routes. Generate the sitemap at build time (walk `app.routes.ts` + CMS/blog data, respect `noindex` flags automatically) rather than adding a 6th manual entry today and a 7th next month. This site has no location pages, so the 30/50-page quality gate thresholds don't apply — but the same discipline (real, unique content per URL before it goes in the sitemap) should carry over to service subpages and blog posts as they're added.
