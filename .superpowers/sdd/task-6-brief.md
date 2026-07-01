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

