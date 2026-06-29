import { Component, computed, inject, signal } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';

type Filter = 'all' | 'web' | 'social';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  private ts = inject(TranslationService);
  protected tr = this.ts.tr;
  protected activeFilter = signal<Filter>('all');

  protected filteredProjects = computed(() => {
    const projects = this.tr().portfolio.projects;
    const filter = this.activeFilter();
    if (filter === 'all') return projects;
    return projects.filter(p => p.tags.includes(filter));
  });

  protected setFilter(filter: Filter): void {
    this.activeFilter.set(filter);
  }
}
