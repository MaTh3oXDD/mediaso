import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Bez zone.js: znika polyfill i patchowanie wszystkich API przegladarki,
    // ktore w pomiarach odpowiadalo za wiekszosc pracy JS przed pierwszym malowaniem.
    // Cala aplikacja stoi na sygnalach, wiec detekcja zmian ma skad brac powiadomienia.
    provideZonelessChangeDetection(),
    // Hydracja zostawia prerenderowany HTML na miejscu zamiast kasowac go i
    // budowac DOM od nowa - to jest wlasciwa przyczyna wysokiego LCP.
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })
    ),
  ],
};
