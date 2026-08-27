import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
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
  // Instancjonowanie serwisu podpina meta tagi i JSON-LD pod zdarzenia routera.
  private seo = inject(SeoService);
  protected tr = this.ts.tr;
}
