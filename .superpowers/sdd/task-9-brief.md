### Task 9: About Page

**Files:**
- Modify: `src/app/pages/about/about.component.ts`
- Create: `src/app/pages/about/about.component.html`
- Create: `src/app/pages/about/about.component.scss`

- [ ] **Step 1: Replace `src/app/pages/about/about.component.ts`**

```ts
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
```

- [ ] **Step 2: Create `src/app/pages/about/about.component.html`**

```html
<!-- PAGE HERO -->
<section class="page-hero">
  <div class="page-hero-orb"></div>
  <div class="container">
    <p class="eyebrow">mediaso</p>
    <h1>{{ tr().about.hero.title }}</h1>
    <p class="subtitle">{{ tr().about.hero.subtitle }}</p>
  </div>
</section>

<!-- MISSION -->
<section class="section">
  <div class="container mission-block">
    <div class="mission-label">
      <span>mission</span>
    </div>
    <div class="mission-content">
      <h2>{{ tr().about.mission.title }}</h2>
      <p>{{ tr().about.mission.text }}</p>
    </div>
  </div>
</section>

<!-- VALUES -->
<section class="section alt-bg">
  <div class="container">
    <app-section-header
      [label]="'values'"
      [title]="tr().about.values.title"
    />
    <div class="values-grid">
      @for (item of tr().about.values.items; track item.title) {
        <div class="card value-card">
          <span class="value-icon">{{ item.icon }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      }
    </div>
  </div>
</section>

<!-- TEAM -->
<section class="section">
  <div class="container">
    <app-section-header
      [label]="'team'"
      [title]="tr().about.team.title"
    />
    <div class="team-grid">
      @for (member of tr().about.team.members; track member.name) {
        <div class="team-card">
          <div class="team-avatar">
            <span>{{ member.name.charAt(0) }}</span>
          </div>
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </div>
      }
    </div>
  </div>
</section>
```

- [ ] **Step 3: Create `src/app/pages/about/about.component.scss`**

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

.alt-bg { background: var(--bg-secondary); }

.mission-block {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @include desktop {
    flex-direction: row;
    align-items: flex-start;
    gap: 4rem;
  }
}

.mission-label {
  flex-shrink: 0;

  span {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--accent-secondary);
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 0.35rem 1rem;
    background: rgba(124, 58, 237, 0.08);
  }
}

.mission-content {
  h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.25rem;
    line-height: 1.3;
  }

  p {
    font-size: 1.05rem;
    color: var(--text-muted);
    line-height: 1.8;
    max-width: 680px;
  }
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include desktop {
    grid-template-columns: repeat(4, 1fr);
  }
}

.value-card {
  text-align: center;

  .value-icon {
    font-size: 2rem;
    display: block;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.6;
  }
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @include desktop {
    grid-template-columns: repeat(4, 1fr);
  }
}

.team-card {
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(19,19,31,0.6);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  transition: border-color var(--transition), transform var(--transition);

  &:hover {
    border-color: var(--border);
    transform: translateY(-4px);
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.85rem;
    color: var(--accent-secondary);
  }
}

.team-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-cyan));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;

  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add src/app/pages/about/
git commit -m "feat: implement About page"
```

---

