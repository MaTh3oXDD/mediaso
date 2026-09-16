import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TranslationService } from './core/services/translation.service';
import { SeoService } from './core/seo/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private ts = inject(TranslationService);
  private router = inject(Router);
  // Instancjonowanie serwisu podpina meta tagi i JSON-LD pod zdarzenia routera.
  private seo = inject(SeoService);
  protected tr = this.ts.tr;

  /** Landing page kampanii nie ma nawigacji ani stopki - każdy link odciąga od formularza. */
  protected isLanding = toSignal(
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.router.routerState.snapshot.root;
        while (route.firstChild) route = route.firstChild;
        return route.data['landing'] === true;
      })
    ),
    { initialValue: false }
  );
}
