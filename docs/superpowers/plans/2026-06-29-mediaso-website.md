# mediaso Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 5-page Angular v18 company website for mediaso with dark Finova-inspired design and PL/EN language switching.

**Architecture:** Angular v18 standalone components, lazy-loaded routes, custom `TranslationService` using signals, all styling via SCSS with CSS custom properties — no UI library.

**Tech Stack:** Angular 18, SCSS, Angular Router, Angular Signals, Jasmine/Karma

## Global Constraints
- Angular v18+, standalone components only — no NgModule
- SCSS with CSS custom properties for all design tokens; no UI library
- `TranslationService` uses `signal()` and `computed()` — no BehaviorSubject
- All routes use `loadComponent` for lazy loading
- Mobile-first SCSS (min-width breakpoints)
- Font: Inter (Google Fonts)
- Polish URL paths: `/`, `/uslugi`, `/o-nas`, `/portfolio`, `/kontakt`
- Contact form is UI only — no backend submission
- Angular 18 control flow syntax: `@if`, `@for`, `@switch` (not `*ngIf` etc.)
- Angular 18 signal inputs: `input()` / `input.required()` (not `@Input()`)

---

### Task 1: Scaffold Angular Project + Global Styles

**Files:**
- Create: Angular project scaffold via CLI
- Modify: `src/index.html` — add Inter font
- Create: `src/styles/_variables.scss` — CSS custom properties
- Create: `src/styles/_reset.scss` — CSS reset
- Create: `src/styles/_mixins.scss` — responsive breakpoint mixins
- Create: `src/styles/_animations.scss` — keyframe animations
- Modify: `src/styles.scss` — import all partials
- Modify: `angular.json` — add stylePreprocessorOptions

**Interfaces:**
- Produces: global CSS vars (`--accent-primary`, `--bg-primary`, etc.), mixins (`tablet`, `desktop`), animations (`fadeInUp`, `float`)

- [ ] **Step 1: Scaffold in current directory**

From inside `C:\Users\Mateusz\Desktop\mediaso` run:
```bash
ng new mediaso --directory=. --style=scss --skip-git --routing --defaults
```
If it fails on non-empty directory, add `--force`.

Expected output: `✔ Packages installed successfully.`

- [ ] **Step 2: Verify scaffold**

```bash
ng version
ls src/app/
```
Expected: `app.component.ts`, `app.routes.ts`, `app.config.ts`, `app.component.html`, `app.component.scss`

- [ ] **Step 3: Add Inter font to index.html**

Edit `src/index.html`, replace `<head>` content with:
```html
<!doctype html>
<html lang="pl">
<head>
  <meta charset="utf-8">
  <title>mediaso — Marketing cyfrowy dla placówek medycznych</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="mediaso — tworzymy strony internetowe i prowadzimy social media dla placówek medycznych.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

- [ ] **Step 4: Create `src/styles/_variables.scss`**

```scss
:root {
  --bg-primary: #080810;
  --bg-secondary: #0f0f1a;
  --bg-card: #13131f;
  --accent-primary: #7c3aed;
  --accent-secondary: #a855f7;
  --accent-glow: rgba(124, 58, 237, 0.3);
  --accent-cyan: #06b6d4;
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
  --border: rgba(124, 58, 237, 0.2);
  --border-subtle: rgba(255, 255, 255, 0.06);
  --gradient-text: linear-gradient(135deg, #a855f7, #06b6d4);
  --gradient-hero: radial-gradient(ellipse 80% 60% at 50% -10%, #1a0533 0%, #080810 70%);
  --gradient-card: linear-gradient(135deg, rgba(124,58,237,0.08), rgba(6,182,212,0.04));
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --transition: 0.3s ease;
  --transition-slow: 0.5s ease;
  --container-max: 1200px;
  --nav-height: 72px;
}
```

- [ ] **Step 5: Create `src/styles/_reset.scss`**

```scss
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

ul, ol {
  list-style: none;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
}

input, textarea {
  font-family: inherit;
}
```

- [ ] **Step 6: Create `src/styles/_mixins.scss`**

```scss
@mixin tablet {
  @media (min-width: 768px) { @content; }
}

@mixin desktop {
  @media (min-width: 1024px) { @content; }
}

@mixin wide {
  @media (min-width: 1280px) { @content; }
}

@mixin container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 1.5rem;

  @include desktop {
    padding: 0 2rem;
  }
}

@mixin glass-card {
  background: rgba(19, 19, 31, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

@mixin gradient-text {
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@mixin glow-hover {
  transition: box-shadow var(--transition), transform var(--transition), border-color var(--transition);
  &:hover {
    box-shadow: 0 0 40px var(--accent-glow);
    border-color: rgba(124, 58, 237, 0.5);
    transform: translateY(-4px);
  }
}
```

- [ ] **Step 7: Create `src/styles/_animations.scss`**

```scss
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}

@keyframes floatReverse {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(30px) scale(0.95); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px var(--accent-glow); }
  50% { box-shadow: 0 0 50px var(--accent-glow), 0 0 80px rgba(124, 58, 237, 0.15); }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.animate-fade-in {
  animation: fadeInUp 0.6s ease forwards;
}

.animate-fade-in-delay-1 { animation: fadeInUp 0.6s ease 0.1s both; }
.animate-fade-in-delay-2 { animation: fadeInUp 0.6s ease 0.2s both; }
.animate-fade-in-delay-3 { animation: fadeInUp 0.6s ease 0.3s both; }
.animate-fade-in-delay-4 { animation: fadeInUp 0.6s ease 0.4s both; }
```

- [ ] **Step 8: Update `src/styles.scss`**

Replace entire file content with:
```scss
@use 'styles/variables';
@use 'styles/reset';
@use 'styles/animations';

// Global utility classes
.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
}

.gradient-text {
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section {
  padding: 5rem 0;

  @media (min-width: 1024px) {
    padding: 7rem 0;
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  transition: all var(--transition);
  cursor: pointer;
  border: none;
  font-family: 'Inter', sans-serif;

  &-primary {
    background: var(--accent-primary);
    color: #fff;
    box-shadow: 0 0 20px var(--accent-glow);

    &:hover {
      background: var(--accent-secondary);
      box-shadow: 0 0 40px var(--accent-glow);
      transform: translateY(-2px);
    }
  }

  &-outline {
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--border);

    &:hover {
      border-color: var(--accent-primary);
      color: var(--accent-secondary);
      background: rgba(124, 58, 237, 0.08);
    }
  }
}

.card {
  background: rgba(19, 19, 31, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  transition: box-shadow var(--transition), transform var(--transition), border-color var(--transition);

  &:hover {
    box-shadow: 0 0 40px var(--accent-glow);
    border-color: rgba(124, 58, 237, 0.5);
    transform: translateY(-4px);
  }
}

.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(124, 58, 237, 0.15);
  color: var(--accent-secondary);
  border: 1px solid var(--border);
}
```

- [ ] **Step 9: Update `angular.json` — add stylePreprocessorOptions**

In `angular.json`, inside `projects.mediaso.architect.build.options`, add:
```json
"stylePreprocessorOptions": {
  "includePaths": ["src"]
}
```

Also verify `styles` array contains `"src/styles.scss"`.

- [ ] **Step 10: Run dev server to verify styles load**

```bash
ng serve --open
```

Expected: browser opens, white text on dark background, no console errors. Stop with Ctrl+C.

- [ ] **Step 11: Commit**

```bash
git add -A
git commit -m "feat: scaffold Angular project with global SCSS design system"
```

---

### Task 2: Translation Service

**Files:**
- Create: `src/app/core/translations/pl.ts`
- Create: `src/app/core/translations/en.ts`
- Create: `src/app/core/translations/translations.type.ts`
- Create: `src/app/core/services/translation.service.ts`
- Create: `src/app/core/services/translation.service.spec.ts`

**Interfaces:**
- Produces: `TranslationService` with `tr: Signal<Translations>`, `currentLang: Signal<'pl'|'en'>`, `setLang(lang)`, `toggleLang()`
- Produces: `Translations` type (derived from `pl.ts`)

- [ ] **Step 1: Create `src/app/core/translations/pl.ts`**

```ts
export const pl = {
  nav: {
    home: 'Strona główna',
    services: 'Usługi',
    about: 'O nas',
    portfolio: 'Portfolio',
    contact: 'Kontakt',
  },
  home: {
    hero: {
      title: 'Twoja przychodnia zasługuje na więcej',
      subtitle: 'Tworzymy strony internetowe i prowadzimy social media dla placówek medycznych. Pomożemy Twojej placówce pozyskać nowych pacjentów.',
      cta1: 'Zobacz usługi',
      cta2: 'Skontaktuj się',
    },
    why: {
      title: 'Dlaczego mediaso?',
      items: [
        { icon: '🏥', title: 'Specjalizacja w healthcare', desc: 'Znamy specyfikę branży medycznej i wiemy, czego szukają pacjenci online.' },
        { icon: '📊', title: 'Kompleksowe podejście', desc: 'Strona + social media = spójny, profesjonalny wizerunek Twojej placówki.' },
        { icon: '📈', title: 'Mierzalne efekty', desc: 'Raportujemy wyniki. Zawsze wiesz, co robią Twoje pieniądze.' },
      ],
    },
    servicesPreview: {
      title: 'Nasze usługi',
      web: {
        title: 'Strony Internetowe',
        desc: 'Nowoczesne, szybkie strony dla przychodni. Responsywne, SEO-friendly, z systemem zarządzania treścią.',
        link: 'Dowiedz się więcej',
      },
      social: {
        title: 'Social Media',
        desc: 'Prowadzimy i odbudowujemy profile Twojej placówki na Facebooku, Instagramie i Google.',
        link: 'Dowiedz się więcej',
      },
    },
    stats: {
      clients: { value: '40+', label: 'Klientów' },
      projects: { value: '80+', label: 'Projektów' },
      years: { value: '5+', label: 'Lat doświadczenia' },
    },
    cta: {
      title: 'Gotowy na zmianę?',
      subtitle: 'Umów się na bezpłatną konsultację i dowiedz się, jak możemy pomóc Twojej placówce.',
      button: 'Zacznijmy współpracę',
    },
  },
  services: {
    hero: {
      title: 'Nasze Usługi',
      subtitle: 'Kompleksowe rozwiązania cyfrowe dla placówek medycznych',
    },
    web: {
      title: 'Strony Internetowe',
      subtitle: 'Profesjonalna strona to wizytówka Twojej przychodni w internecie.',
      features: [
        'Indywidualny projekt graficzny',
        'Responsywność na każdym urządzeniu',
        'Optymalizacja SEO',
        'System zarządzania treścią (CMS)',
        'Szybki czas ładowania',
        'Integracja z Google Maps i kalendarzem',
        'Certyfikat SSL',
        'Obsługa techniczna i aktualizacje',
      ],
    },
    social: {
      title: 'Social Media',
      subtitle: 'Zbuduj obecność w mediach społecznościowych i pozyskaj nowych pacjentów.',
      features: [
        'Audyt obecnych profili',
        'Opracowanie strategii contentu',
        'Tworzenie treści i grafik',
        'Prowadzenie profili Facebook i Instagram',
        'Zarządzanie Google My Business',
        'Raportowanie miesięczne',
        'Obsługa komentarzy i wiadomości',
        'Kampanie reklamowe Meta Ads',
      ],
    },
    process: {
      title: 'Jak pracujemy',
      steps: [
        { num: '01', title: 'Analiza', desc: 'Poznajemy Twoją placówkę, konkurencję i grupę docelową.' },
        { num: '02', title: 'Strategia', desc: 'Opracowujemy plan działań dopasowany do Twoich celów.' },
        { num: '03', title: 'Realizacja', desc: 'Wdrażamy uzgodnione rozwiązania w terminie i budżecie.' },
        { num: '04', title: 'Optymalizacja', desc: 'Monitorujemy efekty i stale poprawiamy wyniki.' },
      ],
    },
    cta: { title: 'Zacznijmy razem', button: 'Skontaktuj się' },
  },
  about: {
    hero: {
      title: 'O nas',
      subtitle: 'Znamy branżę medyczną od środka',
    },
    mission: {
      title: 'Nasza misja',
      text: 'mediaso to agencja cyfrowa stworzona z myślą o placówkach medycznych. Wiemy, że lekarze i zarządzający przychodniami mają ważniejsze rzeczy na głowie niż marketing. Dlatego bierzemy to na siebie — kompleksowo, rzetelnie i z mierzalnymi efektami.',
    },
    values: {
      title: 'Nasze wartości',
      items: [
        { icon: '🎯', title: 'Specjalizacja', desc: 'Skupiamy się wyłącznie na branży medycznej. To nasza przewaga.' },
        { icon: '🤝', title: 'Partnerstwo', desc: 'Traktujemy klientów jak partnerów, nie jak numery na fakturze.' },
        { icon: '📋', title: 'Rzetelność', desc: 'Dotrzymujemy terminów i obietnic. Zawsze.' },
        { icon: '📈', title: 'Efekty', desc: 'Liczy się wynik, nie estetyka raportów.' },
      ],
    },
    team: {
      title: 'Nasz zespół',
      members: [
        { name: 'Anna Kowalska', role: 'CEO & Web Strategist' },
        { name: 'Piotr Nowak', role: 'Social Media Manager' },
        { name: 'Marta Wiśniewska', role: 'Graphic Designer' },
        { name: 'Tomasz Zając', role: 'SEO Specialist' },
      ],
    },
  },
  portfolio: {
    hero: {
      title: 'Portfolio',
      subtitle: 'Nasze realizacje w branży medycznej',
    },
    filters: { all: 'Wszystkie', web: 'Strony WWW', social: 'Social Media' },
    projects: [
      { title: 'Przychodnia Zdrowie Wrocław', tags: ['web', 'social'] as ('web'|'social')[], result: '+180% ruch organiczny', desc: 'Nowa strona + prowadzenie social media przez 12 miesięcy.' },
      { title: 'Centrum Medyczne Vita Kraków', tags: ['web'] as ('web'|'social')[], result: '+220% konwersji', desc: 'Strona z systemem zapisów online i CMS.' },
      { title: 'Gabinet Stomatologiczny SmileUp', tags: ['social'] as ('web'|'social')[], result: '+350% zasięg', desc: 'Odbudowa profili i kampanie reklamowe na Meta.' },
      { title: 'Poradnia Kardiologiczna Gdańsk', tags: ['web', 'social'] as ('web'|'social')[], result: '2x więcej pacjentów', desc: 'Pełna obecność cyfrowa od zera.' },
      { title: 'Klinika Ortopedyczna Warszawa', tags: ['web'] as ('web'|'social')[], result: 'Top 3 Google', desc: 'Strona zoptymalizowana pod frazy lokalne.' },
      { title: 'Centrum Rehabilitacji Łódź', tags: ['social'] as ('web'|'social')[], result: '+500 obserwujących/mies.', desc: 'Strategia contentu i prowadzenie Instagrama.' },
    ],
  },
  contact: {
    hero: {
      title: 'Kontakt',
      subtitle: 'Porozmawiajmy o Twojej placówce',
    },
    form: {
      name: 'Imię i nazwisko',
      email: 'Adres e-mail',
      company: 'Nazwa placówki / firmy',
      message: 'Wiadomość',
      send: 'Wyślij wiadomość',
      success: 'Wiadomość wysłana! Odezwiemy się w ciągu 24 godzin.',
    },
    info: {
      title: 'Dane kontaktowe',
      email: 'kontakt@mediaso.pl',
      phone: '+48 500 000 000',
      location: 'Polska — pracujemy zdalnie z całym krajem',
    },
  },
  footer: {
    tagline: 'Marketing cyfrowy dla placówek medycznych.',
    nav: { title: 'Nawigacja' },
    services: { title: 'Usługi', web: 'Strony Internetowe', social: 'Social Media' },
    copyright: '© 2026 mediaso. Wszystkie prawa zastrzeżone.',
  },
} as const;
```

- [ ] **Step 2: Create `src/app/core/translations/en.ts`**

```ts
export const en = {
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    portfolio: 'Portfolio',
    contact: 'Contact',
  },
  home: {
    hero: {
      title: 'Your clinic deserves more',
      subtitle: 'We build websites and manage social media for medical practices. Help your clinic attract new patients.',
      cta1: 'Our services',
      cta2: 'Get in touch',
    },
    why: {
      title: 'Why mediaso?',
      items: [
        { icon: '🏥', title: 'Healthcare Specialists', desc: 'We know the medical industry and understand what patients look for online.' },
        { icon: '📊', title: 'All-in-One Approach', desc: 'Website + social media = a consistent, professional image for your practice.' },
        { icon: '📈', title: 'Measurable Results', desc: 'We report results. You always know what your money is doing.' },
      ],
    },
    servicesPreview: {
      title: 'Our Services',
      web: {
        title: 'Websites',
        desc: 'Modern, fast websites for medical practices. Responsive, SEO-friendly, with a content management system.',
        link: 'Learn more',
      },
      social: {
        title: 'Social Media',
        desc: "We manage and rebuild your practice's profiles on Facebook, Instagram, and Google.",
        link: 'Learn more',
      },
    },
    stats: {
      clients: { value: '40+', label: 'Clients' },
      projects: { value: '80+', label: 'Projects' },
      years: { value: '5+', label: 'Years of experience' },
    },
    cta: {
      title: 'Ready for a change?',
      subtitle: 'Schedule a free consultation and find out how we can help your practice.',
      button: "Let's work together",
    },
  },
  services: {
    hero: {
      title: 'Our Services',
      subtitle: 'Complete digital solutions for medical practices',
    },
    web: {
      title: 'Websites',
      subtitle: "A professional website is your clinic's calling card on the internet.",
      features: [
        'Custom graphic design',
        'Responsive on every device',
        'SEO optimization',
        'Content management system (CMS)',
        'Fast loading times',
        'Google Maps and calendar integration',
        'SSL certificate',
        'Technical support and updates',
      ],
    },
    social: {
      title: 'Social Media',
      subtitle: 'Build a social media presence and attract new patients.',
      features: [
        'Current profile audit',
        'Content strategy development',
        'Content and graphic creation',
        'Facebook and Instagram management',
        'Google My Business management',
        'Monthly reporting',
        'Comment and message handling',
        'Meta Ads campaigns',
      ],
    },
    process: {
      title: 'How we work',
      steps: [
        { num: '01', title: 'Analysis', desc: 'We learn about your practice, your competition, and your target audience.' },
        { num: '02', title: 'Strategy', desc: 'We develop a plan tailored to your goals.' },
        { num: '03', title: 'Execution', desc: 'We implement agreed solutions on time and on budget.' },
        { num: '04', title: 'Optimization', desc: 'We monitor results and continuously improve performance.' },
      ],
    },
    cta: { title: "Let's start together", button: 'Get in touch' },
  },
  about: {
    hero: {
      title: 'About Us',
      subtitle: 'We know the medical industry inside out',
    },
    mission: {
      title: 'Our Mission',
      text: "mediaso is a digital agency built for medical practices. We know that doctors and clinic managers have more important things to worry about than marketing. That's why we take it on — comprehensively, reliably, and with measurable results.",
    },
    values: {
      title: 'Our Values',
      items: [
        { icon: '🎯', title: 'Specialization', desc: "We focus exclusively on the medical industry. That's our advantage." },
        { icon: '🤝', title: 'Partnership', desc: 'We treat clients as partners, not invoice numbers.' },
        { icon: '📋', title: 'Reliability', desc: 'We meet deadlines and keep our promises. Always.' },
        { icon: '📈', title: 'Results', desc: "Results matter, not the aesthetics of reports." },
      ],
    },
    team: {
      title: 'Our Team',
      members: [
        { name: 'Anna Kowalska', role: 'CEO & Web Strategist' },
        { name: 'Piotr Nowak', role: 'Social Media Manager' },
        { name: 'Marta Wiśniewska', role: 'Graphic Designer' },
        { name: 'Tomasz Zając', role: 'SEO Specialist' },
      ],
    },
  },
  portfolio: {
    hero: {
      title: 'Portfolio',
      subtitle: 'Our work in the medical industry',
    },
    filters: { all: 'All', web: 'Websites', social: 'Social Media' },
    projects: [
      { title: 'Przychodnia Zdrowie Wrocław', tags: ['web', 'social'] as ('web'|'social')[], result: '+180% organic traffic', desc: 'New website + social media management for 12 months.' },
      { title: 'Centrum Medyczne Vita Kraków', tags: ['web'] as ('web'|'social')[], result: '+220% conversions', desc: 'Website with online booking system and CMS.' },
      { title: 'Gabinet Stomatologiczny SmileUp', tags: ['social'] as ('web'|'social')[], result: '+350% reach', desc: 'Profile rebuild and Meta ad campaigns.' },
      { title: 'Poradnia Kardiologiczna Gdańsk', tags: ['web', 'social'] as ('web'|'social')[], result: '2x more patients', desc: 'Complete digital presence from scratch.' },
      { title: 'Klinika Ortopedyczna Warszawa', tags: ['web'] as ('web'|'social')[], result: 'Top 3 on Google', desc: 'Website optimized for local search terms.' },
      { title: 'Centrum Rehabilitacji Łódź', tags: ['social'] as ('web'|'social')[], result: '+500 followers/month', desc: 'Content strategy and Instagram management.' },
    ],
  },
  contact: {
    hero: {
      title: 'Contact',
      subtitle: "Let's talk about your practice",
    },
    form: {
      name: 'Full name',
      email: 'Email address',
      company: 'Practice / company name',
      message: 'Message',
      send: 'Send message',
      success: "Message sent! We'll get back to you within 24 hours.",
    },
    info: {
      title: 'Contact details',
      email: 'kontakt@mediaso.pl',
      phone: '+48 500 000 000',
      location: 'Poland — we work remotely across the country',
    },
  },
  footer: {
    tagline: 'Digital marketing for medical practices.',
    nav: { title: 'Navigation' },
    services: { title: 'Services', web: 'Websites', social: 'Social Media' },
    copyright: '© 2026 mediaso. All rights reserved.',
  },
} as const;
```

- [ ] **Step 3: Create `src/app/core/translations/translations.type.ts`**

```ts
import type { pl } from './pl';

export type Translations = typeof pl;
export type Lang = 'pl' | 'en';
```

- [ ] **Step 4: Write failing test**

Create `src/app/core/services/translation.service.spec.ts`:
```ts
import { TestBed } from '@angular/core/testing';
import { TranslationService } from './translation.service';

describe('TranslationService', () => {
  let service: TranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationService);
  });

  it('should default to Polish', () => {
    expect(service.currentLang()).toBe('pl');
  });

  it('should return Polish translations by default', () => {
    expect(service.tr().nav.home).toBe('Strona główna');
  });

  it('should switch to English', () => {
    service.setLang('en');
    expect(service.currentLang()).toBe('en');
    expect(service.tr().nav.home).toBe('Home');
  });

  it('should toggle language', () => {
    expect(service.currentLang()).toBe('pl');
    service.toggleLang();
    expect(service.currentLang()).toBe('en');
    service.toggleLang();
    expect(service.currentLang()).toBe('pl');
  });

  it('should return updated translations reactively after lang change', () => {
    expect(service.tr().home.cta.button).toBe('Zacznijmy współpracę');
    service.setLang('en');
    expect(service.tr().home.cta.button).toBe("Let's work together");
  });
});
```

- [ ] **Step 5: Run test to see it fail**

```bash
ng test --include="**/translation.service.spec.ts" --watch=false
```
Expected: FAILED — `TranslationService` not found.

- [ ] **Step 6: Implement `src/app/core/services/translation.service.ts`**

```ts
import { Injectable, computed, signal } from '@angular/core';
import { pl } from '../translations/pl';
import { en } from '../translations/en';
import type { Lang, Translations } from '../translations/translations.type';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly _lang = signal<Lang>('pl');
  private readonly _map: Record<Lang, Translations> = { pl, en };

  readonly currentLang = computed(() => this._lang());
  readonly tr = computed(() => this._map[this._lang()]);

  setLang(lang: Lang): void {
    this._lang.set(lang);
  }

  toggleLang(): void {
    this._lang.update(l => (l === 'pl' ? 'en' : 'pl'));
  }
}
```

- [ ] **Step 7: Run tests to verify pass**

```bash
ng test --include="**/translation.service.spec.ts" --watch=false
```
Expected: 5 specs, 0 failures.

- [ ] **Step 8: Commit**

```bash
git add src/app/core/
git commit -m "feat: add TranslationService with PL/EN signal-based switching"
```

---

### Task 3: Section Header Shared Component

**Files:**
- Create: `src/app/shared/components/section-header/section-header.component.ts`
- Create: `src/app/shared/components/section-header/section-header.component.scss`

**Interfaces:**
- Produces: `SectionHeaderComponent` — inputs: `title: string` (required), `subtitle?: string`, `label?: string`, `centered?: boolean`

- [ ] **Step 1: Create `src/app/shared/components/section-header/section-header.component.ts`**

```ts
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-header" [class.centered]="centered()">
      @if (label()) {
        <span class="label">{{ label() }}</span>
      }
      <h2 [innerHTML]="title()"></h2>
      @if (subtitle()) {
        <p class="subtitle">{{ subtitle() }}</p>
      }
    </div>
  `,
  styleUrl: './section-header.component.scss',
})
export class SectionHeaderComponent {
  title = input.required<string>();
  subtitle = input<string>('');
  label = input<string>('');
  centered = input<boolean>(false);
}
```

- [ ] **Step 2: Create `src/app/shared/components/section-header/section-header.component.scss`**

```scss
@use 'styles/mixins' as *;

.section-header {
  max-width: 640px;
  margin-bottom: 3rem;

  &.centered {
    margin: 0 auto 3rem;
    text-align: center;
  }
}

.label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-secondary);
  margin-bottom: 0.75rem;
  padding: 0.25rem 0.75rem;
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid var(--border);
  border-radius: 999px;
}

h2 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.7;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/shared/
git commit -m "feat: add SectionHeaderComponent"
```

---

### Task 4: Navbar Component

**Files:**
- Create: `src/app/layout/navbar/navbar.component.ts`
- Create: `src/app/layout/navbar/navbar.component.html`
- Create: `src/app/layout/navbar/navbar.component.scss`

**Interfaces:**
- Consumes: `TranslationService.tr`, `TranslationService.currentLang`, `TranslationService.toggleLang()`
- Produces: `NavbarComponent` for use in `AppComponent`

- [ ] **Step 1: Create `src/app/layout/navbar/navbar.component.ts`**

```ts
import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private ts = inject(TranslationService);
  protected tr = this.ts.tr;
  protected currentLang = this.ts.currentLang;
  protected menuOpen = signal(false);
  protected scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  protected toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected toggleLang(): void {
    this.ts.toggleLang();
  }
}
```

- [ ] **Step 2: Create `src/app/layout/navbar/navbar.component.html`**

```html
<nav class="navbar" [class.scrolled]="scrolled()">
  <div class="container nav-inner">
    <a routerLink="/" class="logo" (click)="closeMenu()">
      <span class="logo-text">media<span class="logo-accent">so</span></span>
    </a>

    <ul class="nav-links" [class.open]="menuOpen()">
      <li>
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"
           (click)="closeMenu()">{{ tr().nav.home }}</a>
      </li>
      <li>
        <a routerLink="/uslugi" routerLinkActive="active" (click)="closeMenu()">{{ tr().nav.services }}</a>
      </li>
      <li>
        <a routerLink="/o-nas" routerLinkActive="active" (click)="closeMenu()">{{ tr().nav.about }}</a>
      </li>
      <li>
        <a routerLink="/portfolio" routerLinkActive="active" (click)="closeMenu()">{{ tr().nav.portfolio }}</a>
      </li>
      <li>
        <a routerLink="/kontakt" routerLinkActive="active" (click)="closeMenu()">{{ tr().nav.contact }}</a>
      </li>
    </ul>

    <div class="nav-actions">
      <button class="lang-toggle" (click)="toggleLang()" [attr.aria-label]="'Switch language'">
        <span [class.active]="currentLang() === 'pl'">PL</span>
        <span class="divider">/</span>
        <span [class.active]="currentLang() === 'en'">EN</span>
      </button>

      <button class="hamburger" (click)="toggleMenu()" [class.open]="menuOpen()" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>

  @if (menuOpen()) {
    <div class="overlay" (click)="closeMenu()"></div>
  }
</nav>
```

- [ ] **Step 3: Create `src/app/layout/navbar/navbar.component.scss`**

```scss
@use 'styles/mixins' as *;

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  transition: background var(--transition), border-color var(--transition), backdrop-filter var(--transition);

  &.scrolled {
    background: rgba(8, 8, 16, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
  }
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  text-decoration: none;
  z-index: 101;

  &-text {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-primary);
    letter-spacing: -0.02em;
  }

  &-accent {
    background: var(--gradient-text);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.nav-links {
  display: none;
  list-style: none;
  gap: 0.25rem;

  @include desktop {
    display: flex;
    align-items: center;
  }

  li a {
    display: block;
    padding: 0.5rem 0.875rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-muted);
    border-radius: var(--radius-sm);
    transition: color var(--transition), background var(--transition);
    text-decoration: none;

    &:hover {
      color: var(--text-primary);
      background: rgba(255, 255, 255, 0.05);
    }

    &.active {
      color: var(--accent-secondary);
    }
  }

  // Mobile
  @media (max-width: 1023px) {
    &.open {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: var(--nav-height);
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(8, 8, 16, 0.97);
      backdrop-filter: blur(20px);
      padding: 2rem 1.5rem;
      gap: 0.5rem;
      z-index: 99;

      li a {
        font-size: 1.25rem;
        padding: 0.875rem 1rem;
      }
    }
  }
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 101;
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
  cursor: pointer;
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.35rem 0.75rem;
  transition: border-color var(--transition);

  &:hover {
    border-color: var(--accent-primary);
  }

  span.active {
    color: var(--accent-secondary);
  }

  .divider {
    color: var(--border);
  }
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 24px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 4px;

  @include desktop {
    display: none;
  }

  span {
    display: block;
    height: 2px;
    background: var(--text-primary);
    border-radius: 2px;
    transition: transform var(--transition), opacity var(--transition);
  }

  &.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
  &.open span:nth-child(2) { opacity: 0; }
  &.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
}

.overlay {
  position: fixed;
  inset: 0;
  z-index: 98;
  background: rgba(0,0,0,0.5);

  @include desktop {
    display: none;
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add src/app/layout/navbar/
git commit -m "feat: add Navbar with lang switcher and mobile menu"
```

---

### Task 5: Footer Component

**Files:**
- Create: `src/app/layout/footer/footer.component.ts`
- Create: `src/app/layout/footer/footer.component.html`
- Create: `src/app/layout/footer/footer.component.scss`

**Interfaces:**
- Consumes: `TranslationService.tr`
- Produces: `FooterComponent`

- [ ] **Step 1: Create `src/app/layout/footer/footer.component.ts`**

```ts
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private ts = inject(TranslationService);
  protected tr = this.ts.tr;
}
```

- [ ] **Step 2: Create `src/app/layout/footer/footer.component.html`**

```html
<footer class="footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <a routerLink="/" class="logo">
        media<span class="accent">so</span>
      </a>
      <p class="tagline">{{ tr().footer.tagline }}</p>
    </div>

    <div class="footer-col">
      <h4>{{ tr().footer.nav.title }}</h4>
      <ul>
        <li><a routerLink="/">{{ tr().nav.home }}</a></li>
        <li><a routerLink="/uslugi">{{ tr().nav.services }}</a></li>
        <li><a routerLink="/o-nas">{{ tr().nav.about }}</a></li>
        <li><a routerLink="/portfolio">{{ tr().nav.portfolio }}</a></li>
        <li><a routerLink="/kontakt">{{ tr().nav.contact }}</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>{{ tr().footer.services.title }}</h4>
      <ul>
        <li><a routerLink="/uslugi">{{ tr().footer.services.web }}</a></li>
        <li><a routerLink="/uslugi">{{ tr().footer.services.social }}</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>{{ tr().contact.info.title }}</h4>
      <ul>
        <li><a [href]="'mailto:' + tr().contact.info.email">{{ tr().contact.info.email }}</a></li>
        <li><a [href]="'tel:' + tr().contact.info.phone">{{ tr().contact.info.phone }}</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container">
      <p>{{ tr().footer.copyright }}</p>
    </div>
  </div>
</footer>
```

- [ ] **Step 3: Create `src/app/layout/footer/footer.component.scss`**

```scss
@use 'styles/mixins' as *;

.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-subtle);
  padding-top: 4rem;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

  @include tablet {
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
  }
}

.footer-brand {
  .logo {
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--text-primary);
    text-decoration: none;
    letter-spacing: -0.02em;

    .accent {
      background: var(--gradient-text);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .tagline {
    margin-top: 0.75rem;
    font-size: 0.9rem;
    color: var(--text-muted);
    max-width: 220px;
    line-height: 1.6;
  }
}

.footer-col {
  h4 {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    list-style: none;

    a {
      font-size: 0.9rem;
      color: var(--text-secondary);
      text-decoration: none;
      transition: color var(--transition);

      &:hover {
        color: var(--accent-secondary);
      }
    }
  }
}

.footer-bottom {
  margin-top: 3rem;
  padding: 1.5rem 0;
  border-top: 1px solid var(--border-subtle);

  p {
    font-size: 0.85rem;
    color: var(--text-muted);
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add src/app/layout/footer/
git commit -m "feat: add Footer component"
```

---

### Task 6: App Shell (Routes + Config + AppComponent)

**Files:**
- Modify: `src/app/app.routes.ts`
- Modify: `src/app/app.config.ts`
- Modify: `src/app/app.component.ts`
- Modify: `src/app/app.component.html`
- Modify: `src/app/app.component.scss`

**Interfaces:**
- Consumes: `NavbarComponent`, `FooterComponent`, all page components (via lazy routes)
- Produces: working shell with router-outlet, navbar, footer, route animations

- [ ] **Step 1: Replace `src/app/app.routes.ts`**

```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'uslugi',
    loadComponent: () =>
      import('./pages/services/services.component').then(m => m.ServicesComponent),
  },
  {
    path: 'o-nas',
    loadComponent: () =>
      import('./pages/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./pages/portfolio/portfolio.component').then(m => m.PortfolioComponent),
  },
  {
    path: 'kontakt',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent),
  },
  { path: '**', redirectTo: '' },
];
```

- [ ] **Step 2: Replace `src/app/app.config.ts`**

```ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ),
  ],
};
```

- [ ] **Step 3: Replace `src/app/app.component.ts`**

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
```

- [ ] **Step 4: Replace `src/app/app.component.html`**

```html
<app-navbar />
<main class="main-content">
  <router-outlet />
</main>
<app-footer />
```

- [ ] **Step 5: Replace `src/app/app.component.scss`**

```scss
.main-content {
  min-height: 100vh;
  padding-top: var(--nav-height);
}
```

- [ ] **Step 6: Create stub page components** (so routes don't throw errors while building real pages)

Create `src/app/pages/home/home.component.ts`:
```ts
import { Component } from '@angular/core';
@Component({ selector: 'app-home', standalone: true, template: '<div></div>' })
export class HomeComponent {}
```

Create `src/app/pages/services/services.component.ts`:
```ts
import { Component } from '@angular/core';
@Component({ selector: 'app-services', standalone: true, template: '<div></div>' })
export class ServicesComponent {}
```

Create `src/app/pages/about/about.component.ts`:
```ts
import { Component } from '@angular/core';
@Component({ selector: 'app-about', standalone: true, template: '<div></div>' })
export class AboutComponent {}
```

Create `src/app/pages/portfolio/portfolio.component.ts`:
```ts
import { Component } from '@angular/core';
@Component({ selector: 'app-portfolio', standalone: true, template: '<div></div>' })
export class PortfolioComponent {}
```

Create `src/app/pages/contact/contact.component.ts`:
```ts
import { Component } from '@angular/core';
@Component({ selector: 'app-contact', standalone: true, template: '<div></div>' })
export class ContactComponent {}
```

- [ ] **Step 7: Run dev server and verify routing works**

```bash
ng serve
```
Open `http://localhost:4200` — navbar visible, footer visible, no console errors. Navigate to `/uslugi`, `/o-nas`, `/portfolio`, `/kontakt` — all load without errors. Stop with Ctrl+C.

- [ ] **Step 8: Commit**

```bash
git add src/app/
git commit -m "feat: wire up app shell with routing, navbar, and footer"
```

---

### Task 7: Home Page

**Files:**
- Modify: `src/app/pages/home/home.component.ts`
- Create: `src/app/pages/home/home.component.html`
- Create: `src/app/pages/home/home.component.scss`

**Interfaces:**
- Consumes: `TranslationService.tr`, `SectionHeaderComponent`, RouterLink

- [ ] **Step 1: Replace `src/app/pages/home/home.component.ts`**

```ts
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private ts = inject(TranslationService);
  protected tr = this.ts.tr;
}
```

- [ ] **Step 2: Create `src/app/pages/home/home.component.html`**

```html
<!-- HERO -->
<section class="hero">
  <div class="hero-orb hero-orb--1"></div>
  <div class="hero-orb hero-orb--2"></div>
  <div class="container hero-content">
    <div class="hero-badge animate-fade-in">mediaso × healthcare</div>
    <h1 class="hero-title animate-fade-in-delay-1">{{ tr().home.hero.title }}</h1>
    <p class="hero-subtitle animate-fade-in-delay-2">{{ tr().home.hero.subtitle }}</p>
    <div class="hero-actions animate-fade-in-delay-3">
      <a routerLink="/uslugi" class="btn btn-primary">{{ tr().home.hero.cta1 }}</a>
      <a routerLink="/kontakt" class="btn btn-outline">{{ tr().home.hero.cta2 }}</a>
    </div>
  </div>
  <div class="hero-scroll-indicator">
    <div class="scroll-line"></div>
  </div>
</section>

<!-- WHY MEDIASO -->
<section class="section why-section">
  <div class="container">
    <app-section-header
      [label]="'mediaso'"
      [title]="tr().home.why.title"
      [centered]="true"
    />
    <div class="why-grid">
      @for (item of tr().home.why.items; track item.title) {
        <div class="card why-card">
          <div class="why-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      }
    </div>
  </div>
</section>

<!-- SERVICES PREVIEW -->
<section class="section services-preview">
  <div class="container">
    <app-section-header
      [title]="tr().home.servicesPreview.title"
    />
    <div class="services-grid">
      <div class="card service-card service-card--web">
        <div class="service-icon">🌐</div>
        <h3>{{ tr().home.servicesPreview.web.title }}</h3>
        <p>{{ tr().home.servicesPreview.web.desc }}</p>
        <a routerLink="/uslugi" class="service-link">
          {{ tr().home.servicesPreview.web.link }}
          <span class="arrow">→</span>
        </a>
      </div>
      <div class="card service-card service-card--social">
        <div class="service-icon">📱</div>
        <h3>{{ tr().home.servicesPreview.social.title }}</h3>
        <p>{{ tr().home.servicesPreview.social.desc }}</p>
        <a routerLink="/uslugi" class="service-link">
          {{ tr().home.servicesPreview.social.link }}
          <span class="arrow">→</span>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- STATS -->
<section class="section stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-value">{{ tr().home.stats.clients.value }}</span>
        <span class="stat-label">{{ tr().home.stats.clients.label }}</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value">{{ tr().home.stats.projects.value }}</span>
        <span class="stat-label">{{ tr().home.stats.projects.label }}</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value">{{ tr().home.stats.years.value }}</span>
        <span class="stat-label">{{ tr().home.stats.years.label }}</span>
      </div>
    </div>
  </div>
</section>

<!-- CTA BANNER -->
<section class="section cta-section">
  <div class="container">
    <div class="cta-card">
      <div class="cta-glow"></div>
      <h2>{{ tr().home.cta.title }}</h2>
      <p>{{ tr().home.cta.subtitle }}</p>
      <a routerLink="/kontakt" class="btn btn-primary">{{ tr().home.cta.button }}</a>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Create `src/app/pages/home/home.component.scss`**

```scss
@use 'styles/mixins' as *;

// HERO
.hero {
  position: relative;
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--gradient-hero);

  &-orb {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;

    &--1 {
      width: 700px;
      height: 700px;
      background: radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%);
      top: -200px;
      right: -200px;
      animation: float 10s ease-in-out infinite;
    }

    &--2 {
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%);
      bottom: -100px;
      left: -100px;
      animation: floatReverse 14s ease-in-out infinite;
    }
  }

  &-content {
    position: relative;
    z-index: 1;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  &-badge {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--accent-secondary);
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 0.35rem 1rem;
    margin-bottom: 1.5rem;
    background: rgba(124, 58, 237, 0.08);
  }

  &-title {
    font-size: clamp(2.5rem, 7vw, 5rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    max-width: 800px;
    margin-bottom: 1.5rem;

    // Optionally make last word gradient
    span {
      background: var(--gradient-text);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &-subtitle {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: var(--text-muted);
    max-width: 560px;
    line-height: 1.7;
    margin-bottom: 2.5rem;
  }

  &-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  &-scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);

    .scroll-line {
      width: 1px;
      height: 60px;
      background: linear-gradient(to bottom, var(--accent-secondary), transparent);
      margin: 0 auto;
      animation: pulse-glow 2s ease-in-out infinite;
    }
  }
}

// WHY
.why-section {
  background: var(--bg-secondary);
}

.why-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @include tablet {
    grid-template-columns: repeat(3, 1fr);
  }
}

.why-card {
  text-align: center;

  .why-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.95rem;
    color: var(--text-muted);
    line-height: 1.6;
  }
}

// SERVICES PREVIEW
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }
}

.service-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--gradient-card), rgba(19, 19, 31, 0.8);

  .service-icon {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  p {
    color: var(--text-muted);
    line-height: 1.6;
    flex: 1;
  }
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent-secondary);
  text-decoration: none;
  transition: gap var(--transition);

  &:hover .arrow {
    transform: translateX(4px);
  }

  .arrow {
    display: inline-block;
    transition: transform var(--transition);
  }
}

// STATS
.stats-section {
  background: var(--bg-secondary);
}

.stats-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;

  @include tablet {
    flex-direction: row;
    justify-content: center;
    gap: 0;
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0 3rem;

  @include tablet {
    flex: 1;
  }
}

.stat-value {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.stat-divider {
  display: none;

  @include tablet {
    display: block;
    width: 1px;
    height: 60px;
    background: var(--border);
  }
}

// CTA
.cta-card {
  position: relative;
  overflow: hidden;
  background: rgba(124, 58, 237, 0.08);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 4rem 2rem;
  text-align: center;

  @include desktop {
    padding: 5rem 4rem;
  }

  h2 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.05rem;
    color: var(--text-muted);
    max-width: 500px;
    margin: 0 auto 2rem;
    line-height: 1.7;
  }
}

.cta-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(124, 58, 237, 0.15) 0%, transparent 70%);
  pointer-events: none;
}
```

- [ ] **Step 4: Run dev server and verify Home page**

```bash
ng serve
```
Open `http://localhost:4200`. Verify: hero visible with animated orbs, "Dlaczego mediaso?" section, services cards, stats row, CTA banner. Switch PL/EN — all text updates. Mobile: hamburger menu works. Stop Ctrl+C.

- [ ] **Step 5: Commit**

```bash
git add src/app/pages/home/
git commit -m "feat: implement Home page with hero, why, services, stats, CTA sections"
```

---

### Task 8: Services Page

**Files:**
- Modify: `src/app/pages/services/services.component.ts`
- Create: `src/app/pages/services/services.component.html`
- Create: `src/app/pages/services/services.component.scss`

- [ ] **Step 1: Replace `src/app/pages/services/services.component.ts`**

```ts
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  private ts = inject(TranslationService);
  protected tr = this.ts.tr;
}
```

- [ ] **Step 2: Create `src/app/pages/services/services.component.html`**

```html
<!-- PAGE HERO -->
<section class="page-hero">
  <div class="page-hero-orb"></div>
  <div class="container">
    <p class="page-hero-eyebrow">mediaso</p>
    <h1>{{ tr().services.hero.title }}</h1>
    <p class="page-hero-subtitle">{{ tr().services.hero.subtitle }}</p>
  </div>
</section>

<!-- WEB SERVICES -->
<section class="section">
  <div class="container service-block">
    <div class="service-block-header">
      <div class="service-block-icon">🌐</div>
      <div>
        <h2>{{ tr().services.web.title }}</h2>
        <p>{{ tr().services.web.subtitle }}</p>
      </div>
    </div>
    <ul class="features-list">
      @for (feature of tr().services.web.features; track feature) {
        <li class="feature-item">
          <span class="feature-check">✓</span>
          <span>{{ feature }}</span>
        </li>
      }
    </ul>
  </div>
</section>

<!-- SOCIAL SERVICES -->
<section class="section alt-bg">
  <div class="container service-block">
    <div class="service-block-header">
      <div class="service-block-icon">📱</div>
      <div>
        <h2>{{ tr().services.social.title }}</h2>
        <p>{{ tr().services.social.subtitle }}</p>
      </div>
    </div>
    <ul class="features-list">
      @for (feature of tr().services.social.features; track feature) {
        <li class="feature-item">
          <span class="feature-check">✓</span>
          <span>{{ feature }}</span>
        </li>
      }
    </ul>
  </div>
</section>

<!-- PROCESS -->
<section class="section">
  <div class="container">
    <app-section-header
      [label]="'process'"
      [title]="tr().services.process.title"
      [centered]="true"
    />
    <div class="process-grid">
      @for (step of tr().services.process.steps; track step.num) {
        <div class="process-step">
          <div class="step-num">{{ step.num }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.desc }}</p>
        </div>
      }
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section alt-bg">
  <div class="container cta-inline">
    <h2>{{ tr().services.cta.title }}</h2>
    <a routerLink="/kontakt" class="btn btn-primary">{{ tr().services.cta.button }}</a>
  </div>
</section>
```

- [ ] **Step 3: Create `src/app/pages/services/services.component.scss`**

```scss
@use 'styles/mixins' as *;

.page-hero {
  position: relative;
  overflow: hidden;
  padding: 6rem 0 5rem;
  background: var(--gradient-hero);
  text-align: center;

  &-orb {
    position: absolute;
    width: 600px;
    height: 400px;
    background: radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
  }

  .container { position: relative; z-index: 1; }

  &-eyebrow {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent-secondary);
    margin-bottom: 1rem;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  &-subtitle {
    font-size: 1.1rem;
    color: var(--text-muted);
    max-width: 520px;
    margin: 0 auto;
    line-height: 1.7;
  }
}

.alt-bg {
  background: var(--bg-secondary);
}

.service-block {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @include desktop {
    flex-direction: row;
    gap: 4rem;
    align-items: flex-start;
  }
}

.service-block-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 0 0 340px;

  h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-muted);
    line-height: 1.7;
  }
}

.service-block-icon {
  font-size: 3rem;
}

.features-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  flex: 1;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  background: rgba(19,19,31,0.6);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  color: var(--text-secondary);
  transition: border-color var(--transition), background var(--transition);

  &:hover {
    border-color: var(--border);
    background: rgba(124, 58, 237, 0.04);
  }
}

.feature-check {
  color: var(--accent-secondary);
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.process-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include desktop {
    grid-template-columns: repeat(4, 1fr);
  }
}

.process-step {
  padding: 2rem;
  background: rgba(19,19,31,0.6);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: border-color var(--transition), transform var(--transition);

  &:hover {
    border-color: rgba(124,58,237,0.4);
    transform: translateY(-4px);
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.6;
  }
}

.step-num {
  font-size: 2rem;
  font-weight: 800;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  display: block;
}

.cta-inline {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;

  h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    color: var(--text-primary);
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add src/app/pages/services/
git commit -m "feat: implement Services page"
```

---

### Task 9: About Page

**Files:**
- Modify: `src/app/pages/about/about.component.ts`
- Create: `src/app/pages/about/about.component.html`
- Create: `src/app/pages/about/about.component.scss`

- [ ] **Step 1: Replace `src/app/pages/about/about.component.ts`**

```ts
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private ts = inject(TranslationService);
  protected tr = this.ts.tr;
}
```

- [ ] **Step 2: Create `src/app/pages/about/about.component.html`**

```html
<!-- PAGE HERO -->
<section class="page-hero">
  <div class="page-hero-orb"></div>
  <div class="container">
    <p class="eyebrow">mediaso</p>
    <h1>{{ tr().about.hero.title }}</h1>
    <p class="subtitle">{{ tr().about.hero.subtitle }}</p>
  </div>
</section>

<!-- MISSION -->
<section class="section">
  <div class="container mission-block">
    <div class="mission-label">
      <span>mission</span>
    </div>
    <div class="mission-content">
      <h2>{{ tr().about.mission.title }}</h2>
      <p>{{ tr().about.mission.text }}</p>
    </div>
  </div>
</section>

<!-- VALUES -->
<section class="section alt-bg">
  <div class="container">
    <app-section-header
      [label]="'values'"
      [title]="tr().about.values.title"
    />
    <div class="values-grid">
      @for (item of tr().about.values.items; track item.title) {
        <div class="card value-card">
          <span class="value-icon">{{ item.icon }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      }
    </div>
  </div>
</section>

<!-- TEAM -->
<section class="section">
  <div class="container">
    <app-section-header
      [label]="'team'"
      [title]="tr().about.team.title"
    />
    <div class="team-grid">
      @for (member of tr().about.team.members; track member.name) {
        <div class="team-card">
          <div class="team-avatar">
            <span>{{ member.name.charAt(0) }}</span>
          </div>
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </div>
      }
    </div>
  </div>
</section>
```

- [ ] **Step 3: Create `src/app/pages/about/about.component.scss`**

```scss
@use 'styles/mixins' as *;

.page-hero {
  position: relative;
  overflow: hidden;
  padding: 6rem 0 5rem;
  background: var(--gradient-hero);
  text-align: center;

  &-orb {
    position: absolute;
    width: 600px;
    height: 400px;
    background: radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
  }

  .container { position: relative; z-index: 1; }

  .eyebrow {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent-secondary);
    margin-bottom: 1rem;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-muted);
    max-width: 460px;
    margin: 0 auto;
    line-height: 1.7;
  }
}

.alt-bg { background: var(--bg-secondary); }

.mission-block {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @include desktop {
    flex-direction: row;
    align-items: flex-start;
    gap: 4rem;
  }
}

.mission-label {
  flex-shrink: 0;

  span {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--accent-secondary);
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 0.35rem 1rem;
    background: rgba(124, 58, 237, 0.08);
  }
}

.mission-content {
  h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.25rem;
    line-height: 1.3;
  }

  p {
    font-size: 1.05rem;
    color: var(--text-muted);
    line-height: 1.8;
    max-width: 680px;
  }
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include desktop {
    grid-template-columns: repeat(4, 1fr);
  }
}

.value-card {
  text-align: center;

  .value-icon {
    font-size: 2rem;
    display: block;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.6;
  }
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @include desktop {
    grid-template-columns: repeat(4, 1fr);
  }
}

.team-card {
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(19,19,31,0.6);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  transition: border-color var(--transition), transform var(--transition);

  &:hover {
    border-color: var(--border);
    transform: translateY(-4px);
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.85rem;
    color: var(--accent-secondary);
  }
}

.team-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-cyan));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;

  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add src/app/pages/about/
git commit -m "feat: implement About page"
```

---

### Task 10: Portfolio Page

**Files:**
- Modify: `src/app/pages/portfolio/portfolio.component.ts`
- Create: `src/app/pages/portfolio/portfolio.component.html`
- Create: `src/app/pages/portfolio/portfolio.component.scss`

- [ ] **Step 1: Replace `src/app/pages/portfolio/portfolio.component.ts`**

```ts
import { Component, computed, inject, signal } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

type Filter = 'all' | 'web' | 'social';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  private ts = inject(TranslationService);
  protected tr = this.ts.tr;
  protected activeFilter = signal<Filter>('all');

  protected filteredProjects = computed(() => {
    const projects = this.tr().portfolio.projects;
    const filter = this.activeFilter();
    if (filter === 'all') return projects;
    return projects.filter(p => p.tags.includes(filter));
  });

  protected setFilter(filter: Filter): void {
    this.activeFilter.set(filter);
  }
}
```

- [ ] **Step 2: Create `src/app/pages/portfolio/portfolio.component.html`**

```html
<!-- PAGE HERO -->
<section class="page-hero">
  <div class="page-hero-orb"></div>
  <div class="container">
    <p class="eyebrow">mediaso</p>
    <h1>{{ tr().portfolio.hero.title }}</h1>
    <p class="subtitle">{{ tr().portfolio.hero.subtitle }}</p>
  </div>
</section>

<!-- PORTFOLIO GRID -->
<section class="section">
  <div class="container">
    <div class="filter-bar">
      <button
        class="filter-btn"
        [class.active]="activeFilter() === 'all'"
        (click)="setFilter('all')"
      >{{ tr().portfolio.filters.all }}</button>
      <button
        class="filter-btn"
        [class.active]="activeFilter() === 'web'"
        (click)="setFilter('web')"
      >{{ tr().portfolio.filters.web }}</button>
      <button
        class="filter-btn"
        [class.active]="activeFilter() === 'social'"
        (click)="setFilter('social')"
      >{{ tr().portfolio.filters.social }}</button>
    </div>

    <div class="portfolio-grid">
      @for (project of filteredProjects(); track project.title) {
        <div class="card portfolio-card">
          <div class="portfolio-thumb">
            <span class="thumb-icon">
              @if (project.tags.includes('web') && project.tags.includes('social')) { 🌐📱 }
              @else if (project.tags.includes('web')) { 🌐 }
              @else { 📱 }
            </span>
          </div>
          <div class="portfolio-body">
            <div class="portfolio-tags">
              @for (tag of project.tags; track tag) {
                <span class="tag">{{ tag }}</span>
              }
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.desc }}</p>
            <div class="portfolio-result">
              <span class="result-icon">📈</span>
              <span>{{ project.result }}</span>
            </div>
          </div>
        </div>
      }
    </div>
  </div>
</section>
```

- [ ] **Step 3: Create `src/app/pages/portfolio/portfolio.component.scss`**

```scss
@use 'styles/mixins' as *;

.page-hero {
  position: relative;
  overflow: hidden;
  padding: 6rem 0 5rem;
  background: var(--gradient-hero);
  text-align: center;

  &-orb {
    position: absolute;
    width: 600px;
    height: 400px;
    background: radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
  }

  .container { position: relative; z-index: 1; }

  .eyebrow {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent-secondary);
    margin-bottom: 1rem;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-muted);
    max-width: 460px;
    margin: 0 auto;
    line-height: 1.7;
  }
}

.filter-bar {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  cursor: pointer;
  transition: all var(--transition);

  &:hover {
    border-color: var(--border);
    color: var(--text-primary);
  }

  &.active {
    background: rgba(124, 58, 237, 0.15);
    border-color: var(--accent-primary);
    color: var(--accent-secondary);
  }
}

.portfolio-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include desktop {
    grid-template-columns: repeat(3, 1fr);
  }
}

.portfolio-card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.portfolio-thumb {
  height: 160px;
  background: linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.08));
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border-subtle);

  .thumb-icon {
    font-size: 2.5rem;
  }
}

.portfolio-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.portfolio-tags {
  display: flex;
  gap: 0.5rem;
}

.portfolio-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.4;
}

.portfolio-card p {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.5;
  flex: 1;
}

.portfolio-result {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(124, 58, 237, 0.08);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent-secondary);
  margin-top: auto;
}
```

- [ ] **Step 4: Commit**

```bash
git add src/app/pages/portfolio/
git commit -m "feat: implement Portfolio page with filter"
```

---

### Task 11: Contact Page

**Files:**
- Modify: `src/app/pages/contact/contact.component.ts`
- Create: `src/app/pages/contact/contact.component.html`
- Create: `src/app/pages/contact/contact.component.scss`

- [ ] **Step 1: Replace `src/app/pages/contact/contact.component.ts`**

```ts
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private ts = inject(TranslationService);
  protected tr = this.ts.tr;
  protected submitted = signal(false);

  protected form = {
    name: '',
    email: '',
    company: '',
    message: '',
  };

  protected onSubmit(): void {
    this.submitted.set(true);
  }
}
```

- [ ] **Step 2: Create `src/app/pages/contact/contact.component.html`**

```html
<!-- PAGE HERO -->
<section class="page-hero">
  <div class="page-hero-orb"></div>
  <div class="container">
    <p class="eyebrow">mediaso</p>
    <h1>{{ tr().contact.hero.title }}</h1>
    <p class="subtitle">{{ tr().contact.hero.subtitle }}</p>
  </div>
</section>

<!-- CONTACT SECTION -->
<section class="section">
  <div class="container contact-layout">

    <!-- FORM -->
    <div class="form-wrapper">
      @if (!submitted()) {
        <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
          <div class="form-group">
            <label [for]="'name'">{{ tr().contact.form.name }}</label>
            <input
              id="name"
              type="text"
              [(ngModel)]="form.name"
              name="name"
              required
              [placeholder]="tr().contact.form.name"
            />
          </div>
          <div class="form-group">
            <label [for]="'email'">{{ tr().contact.form.email }}</label>
            <input
              id="email"
              type="email"
              [(ngModel)]="form.email"
              name="email"
              required
              [placeholder]="tr().contact.form.email"
            />
          </div>
          <div class="form-group">
            <label [for]="'company'">{{ tr().contact.form.company }}</label>
            <input
              id="company"
              type="text"
              [(ngModel)]="form.company"
              name="company"
              [placeholder]="tr().contact.form.company"
            />
          </div>
          <div class="form-group">
            <label [for]="'message'">{{ tr().contact.form.message }}</label>
            <textarea
              id="message"
              [(ngModel)]="form.message"
              name="message"
              required
              rows="5"
              [placeholder]="tr().contact.form.message"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary submit-btn" [disabled]="contactForm.invalid">
            {{ tr().contact.form.send }}
          </button>
        </form>
      } @else {
        <div class="success-message">
          <div class="success-icon">✓</div>
          <p>{{ tr().contact.form.success }}</p>
        </div>
      }
    </div>

    <!-- INFO -->
    <div class="contact-info">
      <h3>{{ tr().contact.info.title }}</h3>
      <ul class="info-list">
        <li>
          <span class="info-icon">✉️</span>
          <a [href]="'mailto:' + tr().contact.info.email">{{ tr().contact.info.email }}</a>
        </li>
        <li>
          <span class="info-icon">📞</span>
          <a [href]="'tel:' + tr().contact.info.phone">{{ tr().contact.info.phone }}</a>
        </li>
        <li>
          <span class="info-icon">📍</span>
          <span>{{ tr().contact.info.location }}</span>
        </li>
      </ul>
      <div class="info-glow-card">
        <div class="glow-orb"></div>
        <p>Odpowiadamy w ciągu 24h</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Create `src/app/pages/contact/contact.component.scss`**

```scss
@use 'styles/mixins' as *;

.page-hero {
  position: relative;
  overflow: hidden;
  padding: 6rem 0 5rem;
  background: var(--gradient-hero);
  text-align: center;

  &-orb {
    position: absolute;
    width: 600px;
    height: 400px;
    background: radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
  }

  .container { position: relative; z-index: 1; }

  .eyebrow {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent-secondary);
    margin-bottom: 1rem;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-muted);
    max-width: 420px;
    margin: 0 auto;
    line-height: 1.7;
  }
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @include desktop {
    grid-template-columns: 1.4fr 1fr;
    align-items: start;
  }
}

.form-wrapper {
  background: rgba(19,19,31,0.8);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 2.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
  }

  input, textarea {
    background: rgba(8, 8, 16, 0.6);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    padding: 0.75rem 1rem;
    font-size: 0.95rem;
    color: var(--text-primary);
    transition: border-color var(--transition), box-shadow var(--transition);
    resize: none;

    &::placeholder {
      color: var(--text-muted);
      opacity: 0.6;
    }

    &:focus {
      outline: none;
      border-color: var(--accent-primary);
      box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
    }
  }
}

.submit-btn {
  align-self: flex-start;
  margin-top: 0.5rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
}

.success-message {
  text-align: center;
  padding: 3rem 1rem;

  .success-icon {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgba(124, 58, 237, 0.15);
    border: 2px solid var(--accent-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--accent-secondary);
    margin: 0 auto 1.5rem;
  }

  p {
    color: var(--text-secondary);
    font-size: 1.05rem;
    line-height: 1.6;
  }
}

.contact-info {
  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.875rem;

    a, span:last-child {
      font-size: 0.95rem;
      color: var(--text-secondary);
      text-decoration: none;
      line-height: 1.5;

      &:hover {
        color: var(--accent-secondary);
      }
    }
  }
}

.info-icon {
  font-size: 1.1rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.info-glow-card {
  position: relative;
  overflow: hidden;
  background: rgba(124, 58, 237, 0.06);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  text-align: center;

  .glow-orb {
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  p {
    position: relative;
    z-index: 1;
    font-size: 1rem;
    font-weight: 600;
    color: var(--accent-secondary);
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add src/app/pages/contact/
git commit -m "feat: implement Contact page with form"
```

---

### Task 12: Final Polish + Build Verification

**Files:**
- No new files — final verification run

- [ ] **Step 1: Run full build**

```bash
ng build
```
Expected: `Build at: ... - Hash: ... - Time: ...ms`, no TypeScript errors.

- [ ] **Step 2: Run dev server and manually verify all pages**

```bash
ng serve --open
```

Checklist:
- `/` — hero orbs animate, stats visible, CTA works
- `/uslugi` — both service blocks, process steps, CTA
- `/o-nas` — mission, values, team avatars
- `/portfolio` — filter buttons work (All/Strony WWW/Social Media), cards update
- `/kontakt` — form fields focus with purple glow, submit shows success message
- PL/EN toggle — updates ALL text on current page instantly
- Mobile (resize to 375px) — hamburger opens/closes, nav drawer works
- Scroll — navbar gains glass effect after 20px scroll

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "feat: mediaso website complete — 5 pages, PL/EN, dark Finova design"
```
