import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
    data: { seo: 'home' },
  },
  {
    path: 'uslugi',
    loadComponent: () =>
      import('./pages/services/services.component').then(m => m.ServicesComponent),
    data: { seo: 'services' },
  },
  {
    path: 'o-nas',
    loadComponent: () =>
      import('./pages/about/about.component').then(m => m.AboutComponent),
    data: { seo: 'about' },
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./pages/portfolio/portfolio.component').then(m => m.PortfolioComponent),
    // Strona bez realizacji nie ma czego oferowac w wynikach wyszukiwania.
    // Pusty wynik w indeksie obniza ocene calej domeny - wraca po dodaniu tresci.
    data: { seo: 'portfolio', noindex: true },
  },
  {
    path: 'kontakt',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent),
    data: { seo: 'contact' },
  },
  {
    path: 'diagnostyka',
    loadComponent: () =>
      import('./pages/assessment/assessment').then(m => m.Assessment),
    data: { seo: 'assessment' },
  },
  {
    path: 'polityka-prywatnosci',
    loadComponent: () =>
      import('./pages/privacy/privacy.component').then(m => m.PrivacyComponent),
    data: { seo: 'privacy', noindex: true },
  },
  { path: '**', redirectTo: '' },
];
