# Content Quality Audit — mediaso.pl

Scope: `/`, `/uslugi`, `/diagnostyka`, `/o-nas`, `/kontakt`, `/portfolio`. No blog exists. Content in Polish, evaluated per Google's Sept 2025 QRG. Niche: marketing agency selling services to medical facilities (kliniki, przychodnie, gabinety) — a YMYL-adjacent, authority-sensitive niche even though mediaso itself isn't a health provider (it advises on patient-facing communication, so its own credibility as an authority matters for conversion, not just ranking).

## Content Quality Score: 34/100

Driven down by near-total absence of trust and authority signals on `/o-nas`, a fabricated-content-in-waiting `/portfolio`, and a site-wide word count that's roughly a third of what a services business in a specialized B2B niche needs to rank for anything beyond its own brand name.

---

## 1. Word Count vs. Page-Type Minimums

| Page | Words | Type | Minimum (floor, not target) | Verdict |
|---|---|---|---|---|
| `/` | 415 | Homepage | 500 | **Below floor** — Medium |
| `/uslugi` | 475 | Service page (covers 6 distinct services) | 800 (single service) — this page bundles 6, so effective minimum is far higher | **Severely below floor** — High |
| `/diagnostyka` | 727 | Service/tool page | 800 | Near floor, but content is 84 checklist questions, not explanatory copy — see §4 | Medium |
| `/o-nas` | 164 | About page | No official Google minimum, but About pages are the primary E-E-A-T surface — 164 words cannot carry credentials, bios, history | **Severely below floor** — Critical |
| `/kontakt` | 90 | Contact page | No strict minimum; NAP + form is acceptable | Acceptable for page type, but see §3 for missing trust elements | Low |
| `/portfolio` | 76 | Proof/case-study page | 500+ if it's going to exist at all | **Placeholder page indexable-adjacent** — High (see §2) |

Word count is not a ranking factor by itself — the real problem behind these numbers is topical coverage. `/uslugi` lists six services (strony internetowe, social media, optymalizacja Google, rozwój placówki, optymalizacja rejestracji, infolinia medyczna) in ~475 words total — under 80 words per service on average. That's a bullet list, not content that demonstrates expertise or answers a buyer's actual questions (pricing logic, timelines, what's included, why it matters for a medical practice specifically).

## 2. Thin / Placeholder Content — Severity: High to Critical

- **`/portfolio` (76 words):** States outright "Pracujemy nad case studies z naszych projektów. Wkrótce udostępnimy szczegółowe analizy naszych realizacji dla klientów." This is a placeholder, not content. It correctly carries `noindex` per `app.routes.ts` (confirmed in the sitemap audit) — the code owner clearly already knows an empty portfolio page shouldn't be indexed. That's the right defensive move, but it doesn't solve the underlying problem: **an agency selling marketing services to medical practices has zero visible proof of client results.** For a B2B service purchase in a risk-averse niche (a klinika owner vetting who touches their patient acquisition and Google reviews), absence of case studies is a conversion problem as much as an SEO one.
- **`/o-nas` (164 words):** Reads as a mission statement plus a bulleted values list. No names, no photos, no LinkedIn, no "founded in [year] by [X]," no headcount, no client roster, no certifications (Google Partner, Meta Business Partner, etc. — none claimed despite the site literally selling Google Business Profile optimization and Meta Ads). Zero first-hand experience signals beyond the homepage's unverifiable claim "Zespół MediaSO posiada doświadczenie zdobyte przy: tworzeniu stron internetowych dla placówek medycznych..." — a list of activities, not evidence (no named clients, no years, no numbers).
- **`/` homepage (415 words):** Mostly restates value propositions already covered on `/uslugi`. Fine for a homepage's job (orient + funnel), but it duplicates rather than adds, meaning the site has one real content asset (`/uslugi`, and `/diagnostyka` as a lead-gen tool) and everything else is thin wrapper.

## 3. E-E-A-T Assessment

### Experience — Score: 10/25 (Weight 20%)

No first-hand case evidence anywhere on the site. The homepage claims team experience in six specific areas (building websites for medical practices, running social profiles for doctors/clinics, managing medical practices, building organizational procedures, launching new clinics, optimizing front-desk/registration work) but names zero clients, zero practices, zero numbers, zero dates. "Doświadczenie zdobyte przy zarządzaniu placówkami medycznymi" is a claim that the team has actually run a medical practice, which — if true and substantiated — would be a genuine differentiator (direct operator experience, not just agency-side marketing). As written it's unverifiable and reads exactly like the generic-claim pattern the Sept 2025 QRG flags for low-quality/AI-adjacent content: assertion without specificity.

**Fix:** Turn every one of those six bullet points into a named, dated example. Even one real klinika name (with permission) turns this from a claim into evidence.

### Expertise — Score: 12/25 (Weight 25%)

No author bylines (no blog exists at all, so there's no venue for demonstrated expertise). No individual named anywhere on the site — not on `/o-nas`, not in structured data (confirmed: `structured_data` on the homepage exposes `Organization`, `Service`, `ContactPoint`, `Offer`, `OfferCatalog` — no `Person` entities). The diagnostic tool (`/diagnostyka`, 84 questions across 10 operational areas: strategia, pozyskiwanie, rejestracja, strona, marketing, rentowność, KPI, automatyzacja, opinie, skalowalność) is genuinely the strongest expertise signal on the whole site — it demonstrates real operational knowledge of how a medical practice runs, not just marketing tactics. That expertise is completely stranded on one gated interactive page and never surfaced as explanatory content elsewhere (no page explains *why* those 84 criteria matter, which would double as long-form, keyword-rich, citable content).

**Fix:** Add named principals/consultants with credentials (agency background, healthcare-sector experience, certifications). Mine the diagnostic tool's 10 categories into 10 explanatory articles/sections — the expertise already exists in the product, it's just not written down as content.

### Authoritativeness — Score: 8/25 (Weight 25%)

No external validation of any kind found in the crawled content: no press mentions, no client logos, no industry awards, no partner badges (Google Partner / Meta Business Partner), no guest content, no backlink-worthy assets (data studies, original research, industry benchmarks). `/portfolio` — the one page structurally meant to carry this signal — is empty. For a niche this specific (medical practice marketing in Poland), even a handful of named klinika/przychodnia clients or a single published case study would materially outrank pages with none.

### Trustworthiness — Score: 14/30 (Weight 30%, highest weight)

Positives: real phone number (+48 517 910 330), real email (kontakt@mediaso.pl), privacy policy link present, HTTPS, `X-Content-Type-Options`/`X-Frame-Options` security headers present, homepage explicitly states "DANE PACJENTÓW W PEŁNI BEZPIECZNE" (patient data fully secure) — a good trust cue given the target audience handles patient data. Structured data includes `ContactPoint` and `Organization`.

Negatives:
- No physical address anywhere (site states "Polska - pracujemy zdalnie z całym krajem" — remote-only is a legitimate business model, but absence of any registered address plus absence of named people together reads as low transparency for a company asking medical practices to hand over Google Business Profile and social media access).
- No NIP/REGON or other Polish business registration identifier displayed — a low-cost trust addition, especially relevant since B2B buyers in Poland commonly check this before signing a contract.
- No terms of service / umowa summary, no client testimonials, no reviews (ironic for a company whose own service offering is "Zarządzanie opiniami pacjentów" — managing client review reputation — while showing none of its own).
- "DANE PACJENTÓW W PEŁNI BEZPIECZNE" is an absolute claim ("fully secure") with no substantiation (no mention of RODO/GDPR compliance process, data processing agreement, hosting location, or security certification) — this is exactly the kind of unqualified claim the QRG treats as a trust red flag when unsupported, doubly sensitive because it's a claim about handling patient data.

### E-E-A-T Composite: 44/100 weighted
(10/20 + 12/25 + 8/25 + 14/30, normalized ≈ 44)

---

## 4. Readability

Qualitative assessment (Polish text, no established Flesch-equivalent widely used for Polish; assessed on sentence structure, jargon density, scannability):

- **`/`, `/uslugi`:** Short sentences, heavy use of fragments and bullet lists, low jargon. Easy to scan, appropriate for a B2B landing page audience (practice owners, not marketers). No readability concerns.
- **`/diagnostyka`:** 84 yes/no diagnostic questions grouped under 10 category headers with zero connective prose. Fine as a functional checklist UI, but as *indexable content* it is a wall of unstructured questions with no lead-in explaining what a good vs. bad answer means, no framing prose per section. It reads to a crawler and to an LLM as a list, not as an authoritative explainer — a missed opportunity given this is the site's most substantive page.
- **`/o-nas`:** So short that readability is a non-issue; the problem is coverage, not clarity.

No AI-generated-content quality red flags in tone (no obvious template repetition across pages, no filler phrases like "w dzisiejszych czasach" or "warto zauważyć"). The prose that exists is human-sounding and specific to the niche. The problem is volume and evidentiary depth, not synthetic-sounding language.

## 5. AI Citation Readiness — Score: 38/100

What's working:
- Structured data present on homepage (`Organization`, `Service`, `OfferCatalog`, `Offer`, `ContactPoint`, `WebSite`) — good foundation for AI Overviews / LLM grounding on "what does mediaso do" and "what does it cost."
- Pricing is explicit and quotable: "Strona WWW — od 3 500 zł jednorazowo," "Social - Start — od 2 200 zł miesięcznie," "Social - Scale — od 4 500 zł miesięcznie." This is exactly the kind of concrete, extractable fact LLMs prefer to cite. Rare to see pricing this transparent — keep it and expand it (add per-service page pricing once subpages exist).
- Clear H-level hierarchy per page component (Nasze Usługi → per-service subheads → Cennik) is scannable.

What's missing:
- No FAQ content anywhere (no FAQPage schema, no Q&A prose) despite `/diagnostyka` literally containing 84 ready-made Q&A pairs that could be restructured into an FAQ/knowledge page with schema markup.
- No named entities (people) for an LLM to attribute expertise to — "who runs mediaso" has no answer in the content.
- No dates/freshness signals in body content (no "updated [date]," no versioned pricing, no case study dates) — `lastmod` in sitemap.xml is already flagged elsewhere as unreliable (all 5 URLs share one batch-set date).
- No comparison or definitional content ("czym różni się marketing kliniki od marketingu ecommerce," "ile kosztuje marketing dla przychodni") — the exact shape of content LLMs pull into AI Overviews for commercial-investigation queries.
- `/portfolio` returning noindex + placeholder text means there is no citable proof-of-work anywhere in the corpus.

---

## 6. Missing Topical Coverage

The current 6-page site covers "what we sell" and almost nothing else. For a B2B niche this specific, ranking (and getting cited by AI systems) requires content that answers the buyer's actual research questions, not just a services list:

- No content explaining Polish healthcare marketing regulation/compliance (RODO for patient data in marketing, Ustawa o zawodach lekarza restrictions on medical advertising claims, Kodeks Etyki Lekarskiej limits on doctor self-promotion) — this is exactly the expertise-signaling content a specialist agency should own and currently cedes to nobody, since no competitor content was checked but the gap is structural regardless.
- No pricing/ROI education (how much should a klinika budget for marketing, what's a realistic cost-per-patient-acquisition) — `/diagnostyka` measures this internally but never publishes benchmarks.
- No location-specific content despite serving "całą Polskę" remotely — no per-city or per-specialty landing pages (stomatologia, medycyna estetyczna, fizjoterapia, kliniki okulistyczne all have materially different marketing needs and search demand).
- No glossary/definitional content for terms the site itself uses as service names but never explains (co to jest "wizytówka Google," czym różni się SEO lokalne od ogólnego, co to jest lejek pozyskiwania pacjenta).
- No blog — zero venue for freshness signals, zero long-tail capture, zero place to publish the case studies once they exist.

---

## 7. Proposed Content Inventory

Page types needed, with target Polish commercial/informational queries per page. Ordered by priority.

### Priority 1 — Fix before anything else

| Page | Action | Target queries |
|---|---|---|
| `/o-nas` | Rewrite with named founder(s)/team, credentials, company history, certifications, remove or substantiate "od środka" claim | "agencja marketingowa dla klinik," "marketing medyczny doświadczenie" |
| `/portfolio` | Do not launch as indexable until it holds ≥3 real case studies with metrics (before/after leads, review scores, patient volume where the client permits disclosure) | "case study marketing kliniki," "realizacje marketing dla przychodni" |

### Priority 2 — Split `/uslugi` into individual service pages (800+ words each, currently ~80 words/service)

| New page | Target queries |
|---|---|
| `/uslugi/strony-internetowe` | "strona internetowa dla przychodni," "strona www dla kliniki cena," "projektowanie stron dla gabinetów lekarskich" |
| `/uslugi/social-media` | "prowadzenie social media dla lekarzy," "instagram dla kliniki," "marketing w social media placówki medycznej" |
| `/uslugi/optymalizacja-google` | "wizytówka google dla przychodni," "pozycjonowanie lokalne gabinetu lekarskiego," "jak zdobyć opinie google klinika" |
| `/uslugi/rozwoj-placowki` | "jak zwiększyć rentowność przychodni," "analiza rentowności poradni," "konsulting dla klinik" |
| `/uslugi/optymalizacja-rejestracji` | "jak poprawić rejestrację medyczną," "standardy obsługi pacjenta w rejestracji," "skrypty rozmów rejestracja medyczna" |
| `/uslugi/infolinia-medyczna` | "infolinia dla przychodni," "outsourcing rejestracji telefonicznej klinika," "call center medyczne" |

### Priority 3 — New evergreen/blog content (this is where freshness + AI citation readiness gets built)

| Content type | Example target queries |
|---|---|
| Pillar guide | "marketing dla klinik — kompletny przewodnik," "jak zdobyć pacjentów prywatnych" |
| Compliance explainer | "reklama gabinetu lekarskiego przepisy," "czy lekarz może reklamować się w social media," "RODO a marketing placówki medycznej" |
| Pricing/ROI guide | "ile kosztuje marketing dla przychodni," "budżet marketingowy dla kliniki" |
| Specialty-specific guides | "marketing dla gabinetu stomatologicznego," "jak promować klinikę medycyny estetycznej," "marketing dla fizjoterapeuty" |
| Comparison content | "agencja marketingowa dla lekarzy vs freelancer," "własny marketing czy agencja dla przychodni" |
| FAQ hub (from the 84 diagnostyka questions) | long-tail question queries pulled directly from the 10 diagnostic categories, with FAQPage schema |

### Priority 4 — Trust infrastructure (small, low-effort, high E-E-A-T impact)

- Add NIP/REGON and a registered address (even if service is delivered remotely) to `/kontakt` and footer.
- Add named team member(s) with LinkedIn links and photos.
- Substantiate the "DANE PACJENTÓW W PEŁNI BEZPIECZNE" claim with a one-paragraph explanation of what it means in practice (hosting, RODO process, access controls).
- Add client testimonials/logos (even 2-3) — do not wait for the full case-study buildout to add basic social proof.

---

## Severity Summary

| Finding | Severity |
|---|---|
| `/o-nas` has no named people, no credentials — critical E-E-A-T gap in an authority-sensitive niche | Critical |
| `/portfolio` is an empty placeholder page with no proof of work | High |
| `/uslugi` bundles 6 services into ~475 words — no service gets real topical coverage | High |
| No blog / no freshness mechanism sitewide | High |
| Homepage below its own floor (415 vs. 500) | Medium |
| "DANE PACJENTÓW W PEŁNI BEZPIECZNE" is an unsubstantiated absolute trust claim | Medium |
| `/diagnostyka` content is a valuable expertise asset but presented with zero explanatory prose | Medium |
| No NIP/REGON/address displayed | Low-Medium |
| `/kontakt` is thin but appropriate for its page type | Low |
