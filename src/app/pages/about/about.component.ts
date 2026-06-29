import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private ts = inject(TranslationService);
  protected tr = this.ts.tr;
}
