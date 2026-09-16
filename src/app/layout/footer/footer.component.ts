import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SERVICE_PAGES, servicePath } from '../../content/content.registry';
import { SITE } from '../../core/seo/site.config';

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

  protected servicePages = SERVICE_PAGES;
  protected servicePath = servicePath;

  // tel: nie znosi spacji (RFC 3966) - wyswietlamy sformatowany numer,
  // linkujemy surowy.
  protected telHref = `tel:${SITE.phone}`;
}
