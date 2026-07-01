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

