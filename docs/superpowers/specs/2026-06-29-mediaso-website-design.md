# mediaso — Company Website Design Spec
**Date:** 2026-06-29  
**Status:** Approved

---

## Overview

Angular v18 company website for **mediaso** — a digital agency specializing in website creation and social media management/rebuilding for healthcare companies (clinics, medical practices). Dark premium aesthetic inspired by Finova Dark UI template.

---

## Tech Stack

- **Framework:** Angular v18, standalone components
- **Routing:** Angular Router with lazy-loaded routes per page
- **Styling:** SCSS with CSS custom properties (no UI library)
- **i18n:** Custom `TranslationService` (PL/EN) — simple injectable service with typed translation objects
- **Translations:** `src/app/core/translations/pl.ts` + `en.ts`
- **No external UI dependencies**

---

## Project Structure

```
src/app/
├── core/
│   ├── services/translation.service.ts
│   └── translations/
│       ├── pl.ts
│       └── en.ts
├── layout/
│   ├── navbar/
│   │   ├── navbar.component.ts
│   │   ├── navbar.component.html
│   │   └── navbar.component.scss
│   └── footer/
│       ├── footer.component.ts
│       ├── footer.component.html
│       └── footer.component.scss
├── pages/
│   ├── home/
│   ├── services/
│   ├── about/
│   ├── portfolio/
│   └── contact/
├── shared/
│   └── components/
│       ├── section-header/
│       ├── card/
│       └── button/
├── app.component.ts
├── app.routes.ts
└── app.config.ts
styles/
├── _variables.scss
├── _reset.scss
├── _typography.scss
├── _animations.scss
└── styles.scss
```

---

## Visual Design

### Color System (CSS Variables)

```scss
--bg-primary: #080810;
--bg-secondary: #0f0f1a;
--bg-card: #13131f;
--accent-primary: #7c3aed;      /* violet-600 */
--accent-secondary: #a855f7;    /* purple-500 */
--accent-glow: rgba(124, 58, 237, 0.3);
--text-primary: #f8fafc;
--text-secondary: #cbd5e1;
--text-muted: #94a3b8;
--border: rgba(124, 58, 237, 0.2);
--gradient-text: linear-gradient(135deg, #a855f7, #06b6d4);
--gradient-hero: radial-gradient(ellipse at top, #1a0533 0%, #080810 60%);
```

### Effects
- **Glass morphism cards:** `background: rgba(19,19,31,0.8)`, `backdrop-filter: blur(12px)`, subtle violet border
- **Gradient headings:** hero h1 uses `--gradient-text` with `background-clip: text`
- **Glow hover:** `box-shadow: 0 0 30px var(--accent-glow)` on card/button hover
- **Hero background:** animated radial gradient + floating particle dots (CSS only)
- **Route transitions:** fade-in animation on page load

### Typography
- **Font:** Inter (Google Fonts) — 400, 500, 600, 700
- **Hero h1:** 3.5rem–5rem, gradient text
- **Section h2:** 2rem–2.5rem, `--text-primary`
- **Body:** 1rem, `--text-secondary`

---

## Pages

### Home (`/`)
1. **Hero** — Full viewport, animated gradient bg, headline (PL: "Twoje przychodnie zasługują na więcej" / EN: "Your clinics deserve more"), subheadline about mediaso, 2 CTAs: "Zobacz usługi" / "Kontakt"
2. **Why mediaso** — 3 icon+text cards: specjalizacja w healthcare, kompleksowe podejście, mierzalne efekty
3. **Services preview** — 2 large cards: Strony WWW + Social Media, each with brief description and "Dowiedz się więcej" link
4. **Stats counter** — animated numbers: klientów, projektów, lat doświadczenia
5. **CTA Banner** — dark violet gradient section, "Zacznijmy współpracę" button

### Usługi (`/uslugi`)
1. **Page hero** — smaller hero, page title
2. **Website creation card** — features list: responsywność, SEO, CMS, szybkość, dedykowany design
3. **Social media card** — features list: audyt, strategia, tworzenie treści, prowadzenie profili, raportowanie
4. **Process section** — numbered steps: Analiza → Strategia → Realizacja → Optymalizacja
5. **CTA**

### O nas (`/o-nas`)
1. **Mission** — short paragraph about mediaso's focus on healthcare
2. **Values** — 3–4 icon+text: specjalizacja, rzetelność, efekty, partnerstwo
3. **Team** — placeholder cards (photo placeholder, name, role)
4. **Timeline** — simplified history/milestones

### Portfolio (`/portfolio`)
1. **Filter bar** — WWW / Social Media / Wszystkie
2. **Grid** — glass cards: client name (przychodnia X), services used, key results (e.g., "+120% zasięg organiczny"), screenshot placeholder
3. Minimum 4–6 placeholder projects

### Kontakt (`/kontakt`)
1. **Contact form** — fields: Imię i nazwisko, Email, Firma/Przychodnia, Wiadomość, Send button
2. **Contact info** — email, phone placeholder, location
3. **Decorative element** — violet glow orb or geometric shape

---

## Navigation

**Navbar (sticky):**
- Left: "mediaso" wordmark logo (gradient text)
- Center: links — Strona główna, Usługi, O nas, Portfolio, Kontakt
- Right: PL / EN toggle button (pill switcher)
- Mobile: hamburger → slide-in drawer

**Footer:**
- Logo + tagline
- Links columns
- Copyright

---

## i18n Architecture

```ts
// translation.service.ts
@Injectable({ providedIn: 'root' })
export class TranslationService {
  private lang = signal<'pl' | 'en'>('pl');
  private translations = { pl, en };
  
  t(key: string): string { /* dot-notation lookup */ }
  setLang(lang: 'pl' | 'en'): void { this.lang.set(lang); }
  currentLang = computed(() => this.lang());
}
```

Translation files are typed objects with nested keys matching page structure.

---

## Routing

```ts
export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component') },
  { path: 'uslugi', loadComponent: () => import('./pages/services/services.component') },
  { path: 'o-nas', loadComponent: () => import('./pages/about/about.component') },
  { path: 'portfolio', loadComponent: () => import('./pages/portfolio/portfolio.component') },
  { path: 'kontakt', loadComponent: () => import('./pages/contact/contact.component') },
  { path: '**', redirectTo: '' }
];
```

---

## Out of Scope (v1)

- Backend / form submission (contact form is UI only)
- CMS integration
- Real client photos/logos
- SSR / Angular Universal (can be added later)
- Blog page
- Animation library (all CSS only)
