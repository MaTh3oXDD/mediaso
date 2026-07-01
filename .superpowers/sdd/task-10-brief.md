### Task 10: Portfolio Page

**Files:**
- Modify: `src/app/pages/portfolio/portfolio.component.ts`
- Create: `src/app/pages/portfolio/portfolio.component.html`
- Create: `src/app/pages/portfolio/portfolio.component.scss`

- [ ] **Step 1: Replace `src/app/pages/portfolio/portfolio.component.ts`**

```ts
import { Component, computed, inject, signal } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

type Filter = 'all' | 'web' | 'social';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SectionHeaderComponent],
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
```

- [ ] **Step 2: Create `src/app/pages/portfolio/portfolio.component.html`**

```html
<!-- PAGE HERO -->
<section class="page-hero">
  <div class="page-hero-orb"></div>
  <div class="container">
    <p class="eyebrow">mediaso</p>
    <h1>{{ tr().portfolio.hero.title }}</h1>
    <p class="subtitle">{{ tr().portfolio.hero.subtitle }}</p>
  </div>
</section>

<!-- PORTFOLIO GRID -->
<section class="section">
  <div class="container">
    <div class="filter-bar">
      <button
        class="filter-btn"
        [class.active]="activeFilter() === 'all'"
        (click)="setFilter('all')"
      >{{ tr().portfolio.filters.all }}</button>
      <button
        class="filter-btn"
        [class.active]="activeFilter() === 'web'"
        (click)="setFilter('web')"
      >{{ tr().portfolio.filters.web }}</button>
      <button
        class="filter-btn"
        [class.active]="activeFilter() === 'social'"
        (click)="setFilter('social')"
      >{{ tr().portfolio.filters.social }}</button>
    </div>

    <div class="portfolio-grid">
      @for (project of filteredProjects(); track project.title) {
        <div class="card portfolio-card">
          <div class="portfolio-thumb">
            <span class="thumb-icon">
              @if (project.tags.includes('web') && project.tags.includes('social')) { 🌐📱 }
              @else if (project.tags.includes('web')) { 🌐 }
              @else { 📱 }
            </span>
          </div>
          <div class="portfolio-body">
            <div class="portfolio-tags">
              @for (tag of project.tags; track tag) {
                <span class="tag">{{ tag }}</span>
              }
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.desc }}</p>
            <div class="portfolio-result">
              <span class="result-icon">📈</span>
              <span>{{ project.result }}</span>
            </div>
          </div>
        </div>
      }
    </div>
  </div>
</section>
```

- [ ] **Step 3: Create `src/app/pages/portfolio/portfolio.component.scss`**

```scss
@use 'styles/mixins' as *;

.page-hero {
  position: relative;
  overflow: hidden;
  padding: 6rem 0 5rem;
  background: var(--gradient-hero);
  text-align: center;

  &-orb {
    position: absolute;
    width: 600px;
    height: 400px;
    background: radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
  }

  .container { position: relative; z-index: 1; }

  .eyebrow {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent-secondary);
    margin-bottom: 1rem;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-muted);
    max-width: 460px;
    margin: 0 auto;
    line-height: 1.7;
  }
}

.filter-bar {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  cursor: pointer;
  transition: all var(--transition);

  &:hover {
    border-color: var(--border);
    color: var(--text-primary);
  }

  &.active {
    background: rgba(124, 58, 237, 0.15);
    border-color: var(--accent-primary);
    color: var(--accent-secondary);
  }
}

.portfolio-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include desktop {
    grid-template-columns: repeat(3, 1fr);
  }
}

.portfolio-card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.portfolio-thumb {
  height: 160px;
  background: linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.08));
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border-subtle);

  .thumb-icon {
    font-size: 2.5rem;
  }
}

.portfolio-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.portfolio-tags {
  display: flex;
  gap: 0.5rem;
}

.portfolio-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.4;
}

.portfolio-card p {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.5;
  flex: 1;
}

.portfolio-result {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(124, 58, 237, 0.08);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent-secondary);
  margin-top: auto;
}
```

- [ ] **Step 4: Commit**

```bash
git add src/app/pages/portfolio/
git commit -m "feat: implement Portfolio page with filter"
```

---

