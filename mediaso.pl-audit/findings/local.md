# Local SEO Audit — mediaso.pl

Date: 2026-08-27
Scope: https://mediaso.pl/ (home, /kontakt, /o-nas, /uslugi, /diagnostyka, /portfolio, /sitemap.xml, /robots.txt)
Fetch method: raw HTTP fetch (SSR/SSG output from Angular, `ng-server-context="ssg"`) — no client-side rendering gaps found affecting local signals; JSON-LD and contact info are present in the static HTML.

## Business type

**Service-area business (SAB), and the site says so explicitly**: the contact page states *"Polska — pracujemy zdalnie z całym krajem"* (Poland — we work remotely across the whole country). No street address, no city name, no Maps embed, no "odwiedź nas" language anywhere on the site. This reads as a deliberate choice, not an oversight — mediaso sells services to clinics nationwide and has no client-facing office.

**Verdict on the missing address: correct instinct, incomplete execution.** For a legitimate SAB with no walk-in location, hiding the address on the website is right. But two things are still wrong: (1) nothing on the site explains *why* there's no address in a way that reassures a skeptical prospect (a medical-facility owner vetting a vendor), and (2) the correct GBP setup for a SAB — hide address, list service areas, pick the right primary category — can't be verified without GBP dashboard access, and there's no on-page evidence a GBP profile exists at all (see GBP section).

## Industry vertical

Home Services / B2B professional services (marketing agency), not the medical vertical itself — mediaso is a **vendor to** healthcare facilities, so `LocalSchemaTypes` for healthcare (Physician, MedicalOrganization) do not apply to mediaso's own markup. The correct subtype for mediaso itself is `ProfessionalService` or, absent a fixed address, plain `Organization` — which is what's currently used.

## NAP audit

| Field | Visible HTML (footer/kontakt) | JSON-LD (`Organization`) | Meta tags (description/og/twitter) | Consistent? |
|---|---|---|---|---|
| Name | "mediaso" (footer, nav) | `"name": "mediaso"` | "mediaso" in title tags | Yes |
| Phone | `+48 517 910 330` (footer, kontakt list, `tel:` link) | `"telephone": "+48517910330"` | "+48 517 910 330" (kontakt meta description) | Yes, format differs (spaces vs. no spaces) but number matches |
| Email | `kontakt@mediaso.pl` | `"email": "kontakt@mediaso.pl"` | same, in meta descriptions | Yes |
| Address | **Absent everywhere** | **No `address` property at all** | **Absent** | Consistently absent — not a discrepancy, but see Critical finding below |

**Bug found:** the `tel:` links are malformed — `href="tel:+48 517 910 330"` contains spaces. Per RFC 3966 a `tel:` URI should have no spaces (`tel:+48517910330`). This can break click-to-call on some mobile browsers/OS combinations. Low severity, easy fix, appears in both the footer and the /kontakt page.

## GBP (Google Business Profile) signals on-page

| Signal | Status |
|---|---|
| Maps embed / place reference | Not found on any crawled page |
| Link to own GBP profile (e.g. "Zobacz naszą wizytówkę Google") | Not found |
| Review widget / star rating for mediaso itself | Not found |
| `aggregateRating` / `reviewCount` in schema | Not present |
| Social profile links (Facebook, Instagram, LinkedIn) | **Not found anywhere on the site**, including footer — despite the agency explicitly selling Facebook/Instagram management as a service |
| `sameAs` array in Organization schema | **Missing** — no links to GBP, LinkedIn, Facebook, Instagram, KRS/CEIDG, or any external profile |

This is the headline issue. mediaso's core offer is *"Optymalizacja Google"* — described in the JSON-LD as *"Wizytówka Google, mapy i lokalne wyniki wyszukiwania"* — and the checklist on `/diagnostyka` interrogates prospects' Google ratings, review volume, and response behavior. Nothing on mediaso's own site demonstrates it practices what it sells: no visible GBP link, no reviews, no social proof, no case-study numbers tied to local visibility. For a company pitching local-search expertise to skeptical clinic owners, this is a trust gap, not just a technical gap.

## Reviews & reputation

No review data of any kind exists for mediaso on its own site — no testimonials, no star ratings, no client quotes, no `Review`/`AggregateRating` schema. All "opinie" (reviews) mentions on the site are about the *prospect's* clinic reviews (the /diagnostyka checklist asks "Czy średnia ocena Google wynosi co najmniej 4,6?" about the client, not mediaso). Whitespark's 18-day review-velocity rule and the general expectation that a marketing agency shows recent, real client feedback both point to a missing conversion/credibility element here — separate from, but related to, actual GBP review health, which can't be assessed without knowing whether a GBP listing exists.

## Local schema markup validation

Current `Organization` node (`@id: https://mediaso.pl/#organization`):
- `@type: Organization` — acceptable given no fixed address, but `ProfessionalService` (a LocalBusiness subtype) is the more descriptive choice if mediaso later adds a registered business address (even if not client-facing) or wants richer local/AI-visibility signals.
- Has: `name`, `url`, `logo`, `image`, `email`, `telephone`, `description`, `areaServed` (Country: Polska), `contactPoint`, `hasOfferCatalog` with three `Service` offers (including "Optymalizacja Google").
- Missing: `address` (acceptable to omit per Google/schema.org guidance for SAB, but if mediaso has any registered business address — even a non-public one used for invoicing/KRS — a `PostalAddress` with `"addressCountry": "PL"` at minimum, or full address, strengthens trust signals for AI/LLM citation), `sameAs` (critical gap — no links to GBP/social/business registries), `geo` (not applicable without an address), `openingHoursSpecification` (reasonable to omit for a remote-first agency, but if there are business hours for phone support, adding this helps AI assistants answer "when can I call mediaso").
- `areaServed: Country/Polska` is present at both the Organization and each Service/Offer level — good practice for a nationwide SAB, this is exactly the right pattern instead of a `LocalBusiness` with a fake address.

No `LocalBusiness`, `ProfessionalService`, `AggregateRating`, or `Review` schema exists anywhere on the site.

## Citations (Polish market: Panorama Firm, Aleo, GoWork, branżowe katalogi)

**Not independently verifiable from this environment.** Automated `site:` search and direct scraping of Panorama Firm / Aleo / GoWork were blocked (Google consent redirect, GoWork 403, connection issues on Aleo). This needs manual verification or a paid citation-tracking tool (BrightLocal, Moz Local, Whitespark). Flagging as a limitation, not a pass/fail — see disclaimer below.

What can be said from on-site evidence: the site itself contains zero outbound links to any directory, registry, or citation source (no KRS/CEIDG/REGON reference, no Panorama Firm/Aleo/GoWork badge or link, no LinkedIn company page link). For a company whose own AI/local visibility matters for lead generation, this is worth closing regardless of what a citation audit later reveals.

## Location / city-targeting pages

Sitemap (`/sitemap.xml`) lists only 5 URLs: `/`, `/uslugi`, `/o-nas`, `/kontakt`, `/diagnostyka`. No city or region landing pages exist (e.g. "marketing dla przychodni Warszawa/Kraków/Wrocław"). Given the business is genuinely nationwide and remote, this is defensible — doorway-style city pages with thin, swapped content would be a worse outcome than none at all. If mediaso wants to compete for city-qualified searches from clinic owners, the better path is a handful of **substantively different** city/region pages with real local market commentary (e.g. clinic density, competitive landscape by voivodeship), not templated doorway pages — flagged as optional/Medium, not required.

Note per prior audit context: the EN language toggle exists as a visitor convenience, not an SEO channel — this note does not apply to the PL-market local findings above and no hreflang/`/en/` recommendation is made here.

## Prioritized actions

**Critical**
1. Create/claim a Google Business Profile for mediaso if none exists, configured correctly for a service-area business: hide the address, set the primary category (e.g. "Marketing Agency" or "Internet Marketing Service" — verify against GBP's current category list), define the areas served (Poland or specific voivodeships/cities where clients concentrate), and add the phone/website/hours. Confirm this exists before any other GBP-related fix — everything else below depends on it.
2. Add a `sameAs` array to the `Organization` JSON-LD linking to the GBP profile URL, LinkedIn company page, and any active Facebook/Instagram business accounts. Currently zero external profile links exist anywhere on the site.
3. Put visible proof of mediaso's own local-search competence on the site: a GBP review widget/rating, 2-3 real client testimonials with names/facilities (with consent), or a short case study citing a measurable local-visibility result. Selling "optymalizacja wizytówki Google" with zero demonstrated own reviews undercuts the pitch.

**High**
4. Add `Review`/`AggregateRating` schema once real reviews exist (do not fabricate).
5. Add links from the site footer/kontakt page to mediaso's own social profiles (Facebook, Instagram, LinkedIn) — currently absent despite being core services sold to clients.
6. Verify citation presence on Panorama Firm, Aleo, GoWork, and at least one industry directory (e.g. branżowe katalogi agencji marketingowych) manually or via a citation tool; create/claim listings with NAP matching the site exactly (`mediaso`, `+48 517 910 330`, `kontakt@mediaso.pl`).

**Medium**
7. Fix the malformed `tel:` links (`tel:+48 517 910 330` → `tel:+48517910330`) in the footer and /kontakt page — affects click-to-call reliability.
8. Consider changing `@type` from `Organization` to `ProfessionalService` if a registered (even non-public-facing) business address can be added — improves eligibility for richer local/AI-visibility features without requiring a storefront to be shown publicly.
9. Add a KRS/CEIDG/NIP reference somewhere on the site (e.g. footer or /o-nas) — standard trust signal for Polish B2B services and useful for directory/citation matching.

**Low**
10. If pursuing city/region-qualified search traffic, build a small number of genuinely differentiated regional pages (not doorway pages) rather than none — optional, only if there's a real content angle per region.

## Limitations disclaimer

- Citation presence on Panorama Firm, Aleo, GoWork, and other Polish directories could not be confirmed programmatically in this session (search engine consent walls, directory-side blocking). Requires manual lookup or a paid citation tool.
- Whether a Google Business Profile exists for mediaso at all could not be confirmed — there is no on-page evidence either way (no embed, no link, no review count), which is itself the finding, but a live GBP search was not performed.
- Review velocity, response rate, and actual GBP category/completeness require GBP dashboard access or a business-listing API (e.g. DataForSEO `business_data_business_listings_search`), which was not available in this session.
- Proximity — the single largest ranking factor per Search Atlas ML research (55.2% of variance) — is outside the scope of any on-page or schema fix and is not addressed by this audit.
