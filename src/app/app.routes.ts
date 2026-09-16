import { Routes } from '@angular/router';
import { ARTICLES, SERVICE_PAGES } from './content/content.registry';

/**
 * Podstrony usług i artykuły dostają osobne wpisy zamiast trasy z parametrem.
 * Prerender bierze listę tras wprost z tej konfiguracji - trasa `:slug` wymagałaby
 * osobnego dostarczania parametrów i cicho gubiłaby nowe strony.
 */
const serviceRoutes: Routes = SERVICE_PAGES.map(page => ({
  path: `uslugi/${page.slug}`,
  loadComponent: () =>
    import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent),
  data: { seo: 'serviceDetail', slug: page.slug },
}));

const articleRoutes: Routes = ARTICLES.map(article => ({
  path: `wiedza/${article.slug}`,
  loadComponent: () =>
    import('./pages/article-detail/article-detail.component').then(m => m.ArticleDetailComponent),
  data: { seo: 'articleDetail', slug: article.slug },
}));

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
  ...serviceRoutes,
  {
    path: 'wiedza',
    loadComponent: () =>
      import('./pages/knowledge/knowledge.component').then(m => m.KnowledgeComponent),
    data: { seo: 'knowledge' },
  },
  ...articleRoutes,
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
    path: 'landing/marketing-medyczny',
    loadComponent: () =>
      import('./pages/landing/landing.component').then(m => m.LandingComponent),
    // Strona pod kampanię Google Ads: bez nawigacji i stopki (landing: true),
    // poza indeksem, bo powtarza treść strony głównej i usług.
    data: { seo: 'landing', noindex: true, landing: true },
  },
  {
    path: 'polityka-prywatnosci',
    loadComponent: () =>
      import('./pages/privacy/privacy.component').then(m => m.PrivacyComponent),
    data: { seo: 'privacy', noindex: true },
  },
  { path: '**', redirectTo: '' },
];
