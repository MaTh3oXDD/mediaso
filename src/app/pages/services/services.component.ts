import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { SERVICE_PAGES, servicePath } from '../../content/content.registry';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  private ts = inject(TranslationService);
  protected tr = this.ts.tr;

  // Hub linkuje do dedykowanych podstron - to one rankują na frazy zakupowe.
  protected servicePages = SERVICE_PAGES;
  protected servicePath = servicePath;
}
