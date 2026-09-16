# GEO / AI Search Readiness Audit — mediaso.pl

Audited live: https://mediaso.pl/, /uslugi, /o-nas, /kontakt, /diagnostyka, /portfolio, /robots.txt, /llms.txt, /sitemap.xml.
Rendering: server-rendered/prerendered Angular (SSR), not an SPA shell — content is present in raw HTML with no JS execution required. Server: nginx.

## GEO Readiness Score: 41 / 100

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| Citability | 25% | 35/100 | 8.8 |
| Structural Readability | 20% | 55/100 | 11.0 |
| Multi-Modal Content | 15% | 15/100 | 2.3 |
| Authority & Brand Signals | 20% | 20/100 | 4.0 |
| Technical Accessibility | 20% | 75/100 | 15.0 |
| **Total** | | | **~41/100** |

## Platform-Specific Estimated Visibility

| Platform | Score | Why |
|---|---|---|
| Google AI Overviews | 35/100 | Valid Organization/Service schema helps; thin pages and zero third-party corroboration hurt |
| ChatGPT (search/browsing) | 20/100 | No external footprint (no Reddit, YouTube, Wikipedia, press) for ChatGPT to draw on; on-site passages too short to quote |
| Perplexity | 25/100 | Same gap — Perplexity favors sources with stats + citations; site has price points but no sourced claims |
| Bing Copilot | 30/100 | Bing indexes fast on SSR sites like this, but same thin-content ceiling applies |

Only ~11% of domains get cited by both ChatGPT and Google AIO — mediaso.pl currently has close to none of the prerequisites (citable passages, third-party corroboration) for either.

---

## 1. AI Crawler Accessibility — Severity: LOW (currently open, but unmanaged)

`robots.txt`:
```
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://mediaso.pl/sitemap.xml
```

- **GPTBot** — allowed (falls under `User-agent: *`)
- **OAI-SearchBot** — allowed
- **ClaudeBot** — allowed
- **PerplexityBot** — allowed
- **Google-Extended** — allowed
- **CCBot / anthropic-ai / cohere-ai** (training-only crawlers) — also allowed, since there are no bot-specific rules at all

**Finding:** nothing is blocked today, so AI-search crawlers can reach every page. But there's no explicit per-bot policy — a single wildcard rule governs everyone, including training-only crawlers the user may want to treat differently from search crawlers (GPTBot/ClaudeBot/PerplexityBot vs. CCBot/anthropic-ai/cohere-ai).

**Fix (optional, low effort):** if the client wants to permit AI-search citation but opt out of pure model-training scraping, add explicit blocks for `CCBot`, `anthropic-ai`, and `cohere-ai` while leaving `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, and `Google-Extended` untouched. Not urgent — current setup doesn't block anyone from citing the site.

No noindex/nofollow found on any crawled page; canonical tags present and correct (self-referencing, e.g. `https://mediaso.pl/`).

## 2. llms.txt — Severity: MEDIUM

`https://mediaso.pl/llms.txt` returns **404**. No `/llms.txt`, no RSL 1.0 licensing declaration.

**Fix (low effort, ~1-2h):** publish `/llms.txt` at root with: one-line business description, links to the 4 real pages (home, /uslugi, /o-nas, /kontakt — exclude /portfolio until populated), and a short "allowed use" note. This won't move rankings on its own but it's a near-zero-cost signal several AI crawlers now parse, and it's the fastest checkbox item in this audit.

## 3. Passage-Level Citability — Severity: HIGH

Optimal AI-citable passage length is 134-167 words of self-contained prose. Measured body word counts (excluding nav/footer):

| Page | Words | Content type |
|---|---|---|
| / (home) | ~409 | Hero line + 3 short feature blurbs (1-2 sentences each) + list of past work |
| /uslugi | ~750 | Almost entirely bullet lists (✓ item, ✓ item...) and a pricing table — very little connected prose |
| /o-nas | ~230 | 1 mission paragraph (~70 words) + 4 one-line value statements |
| /kontakt | ~110 | Form labels + contact details, no informational prose |
| /diagnostyka | ~1,100-1,200 | Mostly UI labels and a long checklist of audit criteria, not narrative answers |
| /portfolio | placeholder ("wkrótce udostępnimy case studies") | 0 citable content |

**Problem:** none of the pages contain a 134-167 word self-contained answer block. The longest continuous prose on the whole site is the ~70-word mission paragraph on /o-nas. Everything else is fragmented into checkmark bullets ("✓ Responsywność na każdym urządzeniu", "✓ Certyfikat SSL") or UI chrome. An LLM summarizing "co robi mediaso" has almost nothing to quote directly — it has to synthesize from list fragments, which produces vaguer, less confident citations (or none at all, since models favor sources they can quote verbatim).

**Fix (high impact, medium effort — 1-2 days per page):**
- Add a genuine answer-paragraph (134-167 words) directly under each H2 on /uslugi, e.g. under "Optymalizacja Google": what it is, what's included, and a concrete outcome — written as connected sentences, not just bullets. Keep the bullets below it for scanning, but the paragraph is what gets quoted.
- On /o-nas, expand "Nasza misja" from ~70 words to a full 150-word block that states plainly, in the first sentence, what mediaso does and for whom ("MediaSO to agencja marketingowa specjalizująca się wyłącznie w placówkach medycznych w Polsce — klinikach, przychodniach i gabinetach...").
- Turn the /uslugi feature list items into direct-answer micro-FAQs: "Ile kosztuje strona internetowa dla przychodni?", "Co obejmuje optymalizacja Google dla placówki medycznej?" — each answered in the first 40-60 words, matching how ChatGPT/Perplexity extract answers to long-tail medical-marketing queries.
- Do not add prose to /diagnostyka's criteria list — that content is inherently structural (a checklist), not a citation target. Leave it as UI.

## 4. Structural Readability — Severity: MEDIUM

- Homepage H2s are already question-shaped, which is good for citability: "Dlaczego my?", "Co zyskuje Twoja placówka?", "Co możemy poprawić w placówce?". Keep this pattern.
- **Duplicate H1 on /uslugi**: both "mediaso" (logo/brand mark, rendered as H1) and "Nasze Usługi" are marked up as `<h1>`. Only one H1 per page should exist. **Fix (low effort):** demote the logo/brand H1 to a non-heading element (e.g. `<span>` or `<p class="logo">`) — this is a 5-minute template fix, likely shared across all pages (same pattern probably appears site-wide since /uslugi and home both show a "mediaso" H1 before the real page H1).
- No H2/H3s on /uslugi or /o-nas are phrased as questions — they're short noun-phrase labels ("Strony Internetowe", "Nasze wartości"). Converting service headings to question form ("Ile kosztuje strona internetowa dla przychodni?") would materially help both citability and this dimension.
- No FAQ section or FAQPage schema anywhere on the site — a natural fit given the question-style H2 pattern already in use on the homepage.

## 5. Multi-Modal Content — Severity: HIGH

- No video content (no YouTube embeds, no self-hosted video) — video is the single strongest correlate with AI citation (~0.737) in the reference data above, and mediaso currently has zero presence there.
- No downloadable resources (guides, checklists, whitepapers) despite having a genuinely useful asset already built — the 84-criteria /diagnostyka tool could be repackaged as a citable PDF/article ("84 kryteria wzrostu placówki medycznej — checklist").
- No infographics, no data visualizations, no client logos/images beyond the site's own template graphics.

**Fix (medium effort, high impact):** 1) publish 2-3 short YouTube videos (even simple talking-head explainer format: "Jak wygląda marketing dla przychodni?") and link them from the relevant service pages — cheapest lever given the 0.737 correlation; 2) turn the /diagnostyka criteria list into a downloadable/linkable checklist article, which also solves the citability gap in Finding 3 for that page.

## 6. Authority & Brand Signals — Severity: CRITICAL

This is the weakest dimension and the main reason ChatGPT/Perplexity would currently return nothing for "jaka agencja marketingowa dla przychodni":

- **Zero external brand footprint found.** No sameAs links in the Organization JSON-LD, no links anywhere on the site to Facebook, Instagram, LinkedIn, or YouTube profiles for mediaso itself (ironic, since /uslugi sells "prowadzenie profili Facebook i Instagram" as a service to clients). Bing search for "mediaso.pl agencja marketingowa" returned no matches at all — no Wikipedia, no LinkedIn, no YouTube, no Reddit, no Clutch/GoWork/GoldenLine listing.
- **No case studies, no client names, no client logos, no testimonials, no numbers-backed results anywhere on the site.** /portfolio is a placeholder page ("Pracujemy nad case studies... Wkrótce udostępnimy") — it exists in the site nav and is a real crawlable URL, but is **not in sitemap.xml** (which lists only /, /uslugi, /o-nas, /kontakt, /diagnostyka). A thin placeholder page being crawlable-but-unlisted is a mild inconsistency; more importantly it's currently a checkable claim with nothing behind it.
- **No authorship or bylines** on any content, no named team members, no credentials, no "founded in [year]" statement (footer shows generic "© 2026 mediaso" only).
- **No dates** on any substantive content — nothing to signal freshness to a model weighing recency.
- Organization schema (@type: Organization) is technically valid and includes NAP data (phone, email, areaServed: Polska, ContactPoint), which is a solid baseline — but with no `sameAs` array and no corroborating external mentions, it's an unverified self-declaration from the model's perspective.

**Fix, in priority order:**
1. **(High effort, highest impact)** Populate /portfolio with 2-3 real case studies naming actual clinic/przychodnia clients (with permission) and concrete before/after numbers (e.g. "wzrost liczby zapytań o X%"). Add it to sitemap.xml once populated. This single change does more for AI citability than any on-page copy tweak — it's the "specific statistics with source attribution" signal the citability model rewards, and it's the only thing that can make a third party (a review site, a client's own testimonial page, a directory) plausibly link to or repeat.
2. **(Low effort)** Create and link real LinkedIn company page + add `sameAs` array to the Organization schema pointing to it (and to Facebook/Instagram/YouTube once those exist). LinkedIn presence is directly checked by GEO tools and is table stakes for a B2B agency.
3. **(Medium effort)** Add named founder/team bios to /o-nas with real names and a sentence of credentials each — removes the current fully-anonymous authorship gap.
4. **(Medium effort)** Get listed in relevant Polish B2B directories (GoWork, Clutch, Aleo, PKT) and healthcare-marketing niche listings — currently zero third-party listings were found, which explains why a Bing search for the brand name turns up nothing.
5. Get the agency or its clients mentioned in even one earned piece of coverage (industry press, guest post, podcast) — Reddit/forum presence and press mentions are the kind of independent corroboration LLMs weight heavily and mediaso currently has none.

## 7. Technical Accessibility — Severity: LOW (this is the strength of the site)

- Site is SSR/prerendered — `is_spa: false` on raw fetch, full content present without executing JS. This is exactly what AI crawlers need; no rendering-budget risk.
- Valid, well-formed JSON-LD (`Organization`, `Service`, `OfferCatalog`, `WebSite`, `WebPage` types) present on the homepage.
- Correct canonical tags, OG/Twitter meta, `meta robots: index, follow, max-snippet:-1` (explicitly permits unlimited snippet length — good, don't undo this).
- Clean nginx headers, gzip, no blocking `X-Robots-Tag`.
- Sitemap present and valid but incomplete (missing /portfolio — acceptable while thin, should be added once populated per Finding 6).

No action needed here beyond the sitemap/portfolio sync noted above.

---

## Top 5 Highest-Impact Fixes (ranked)

| # | Fix | Dimension | Effort | Impact |
|---|---|---|---|---|
| 1 | Publish real case studies on /portfolio with named clients + numbers; add page to sitemap | Authority | High (1-2 wk, needs client cooperation) | Very High — only lever that creates a genuinely citable, corroborated claim |
| 2 | Add a 134-167 word direct-answer paragraph under each service H2 on /uslugi and expand /o-nas mission to ~150 words | Citability | Medium (1-2 days) | High — creates the first quotable passages on the site |
| 3 | Create LinkedIn company page + YouTube channel with 2-3 short videos; add `sameAs` to schema | Authority + Multi-Modal | Medium (few days) | High — video has the strongest known correlation (0.737) with AI citation, and closes the "zero external footprint" gap |
| 4 | Fix duplicate H1 on /uslugi (and audit other pages for the same template pattern); convert service headings to question form | Structural | Low (hours) | Medium |
| 5 | Publish `/llms.txt` | Technical | Low (1-2h) | Low-Medium, near-zero cost |

## Bottom Line

The technical foundation is solid (SSR, valid schema, open robots.txt, clean canonical/meta setup) — nothing here is blocking any AI crawler. The gap is entirely on the content and corroboration side: pages are too short and too list-fragmented to produce quotable passages, and the brand has essentially no footprint outside its own domain (no case studies, no social profiles, no directory listings, no press, no video). For a query like "jaka agencja marketingowa dla przychodni", an LLM today has nothing external to surface mediaso with, and little on-site prose to quote even if it found the domain. Fixes 1-3 above are what would change that.
