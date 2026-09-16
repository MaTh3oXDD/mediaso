import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { PORTFOLIO_PROJECTS } from '../../content/portfolio.data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  private ts = inject(TranslationService);
  protected tr = this.ts.tr;

  protected projects = PORTFOLIO_PROJECTS;
}
