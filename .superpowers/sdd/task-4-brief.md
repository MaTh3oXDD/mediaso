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

