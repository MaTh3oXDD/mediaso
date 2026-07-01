# Task 6 Report: App Shell

**Status:** DONE

## Commits Created

- `b6c9f7e` feat: wire up app shell with routing, navbar, and footer

## Test Summary

`ng serve` started clean, no errors. All 5 lazy chunks generated (home, about, services, portfolio, contact). Server listening at http://localhost:4200/.

## Files Modified / Created

### Modified
- `src/app/app.routes.ts` — replaced with 5 lazy `loadComponent` routes + wildcard redirect
- `src/app/app.config.ts` — replaced `provideBrowserGlobalErrorListeners` with `provideZoneChangeDetection`, added `withInMemoryScrolling({ scrollPositionRestoration: 'top' })`
- `src/app/app.ts` — updated imports to include `NavbarComponent`, `FooterComponent`, `RouterOutlet`; removed unused `signal`/`title`; added `standalone: true`
- `src/app/app.html` — replaced Angular CLI welcome template with `<app-navbar />`, `<main class="main-content"><router-outlet /></main>`, `<app-footer />`
- `src/app/app.scss` — replaced (was empty) with `.main-content { min-height: 100vh; padding-top: var(--nav-height); }`

### Created (stub page components)
- `src/app/pages/home/home.component.ts`
- `src/app/pages/services/services.component.ts`
- `src/app/pages/about/about.component.ts`
- `src/app/pages/portfolio/portfolio.component.ts`
- `src/app/pages/contact/contact.component.ts`

## Concerns

None. CRLF line-ending warnings from git are cosmetic (Windows repo setting) and do not affect the build.

Note: Angular 21 uses short file names (`app.ts`, `app.html`, `app.scss`) — the brief referenced `app.component.*` names which do not exist. Changes were applied to the correct short-name files.
