### Task 8: Services Page

**Files:**
- Modify: `src/app/pages/services/services.component.ts`
- Create: `src/app/pages/services/services.component.html`
- Create: `src/app/pages/services/services.component.scss`

- [ ] **Step 1: Replace `src/app/pages/services/services.component.ts`**

```ts
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

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
}
```

- [ ] **Step 2: Create `src/app/pages/services/services.component.html`**

```html
<!-- PAGE HERO -->
<section class="page-hero">
  <div class="page-hero-orb"></div>
  <div class="container">
    <p class="page-hero-eyebrow">mediaso</p>
    <h1>{{ tr().services.hero.title }}</h1>
    <p class="page-hero-subtitle">{{ tr().services.hero.subtitle }}</p>
  </div>
</section>

<!-- WEB SERVICES -->
<section class="section">
  <div class="container service-block">
    <div class="service-block-header">
      <div class="service-block-icon">🌐</div>
      <div>
        <h2>{{ tr().services.web.title }}</h2>
        <p>{{ tr().services.web.subtitle }}</p>
      </div>
    </div>
    <ul class="features-list">
      @for (feature of tr().services.web.features; track feature) {
        <li class="feature-item">
          <span class="feature-check">✓</span>
          <span>{{ feature }}</span>
        </li>
      }
    </ul>
  </div>
</section>

<!-- SOCIAL SERVICES -->
<section class="section alt-bg">
  <div class="container service-block">
    <div class="service-block-header">
      <div class="service-block-icon">📱</div>
      <div>
        <h2>{{ tr().services.social.title }}</h2>
        <p>{{ tr().services.social.subtitle }}</p>
      </div>
    </div>
    <ul class="features-list">
      @for (feature of tr().services.social.features; track feature) {
        <li class="feature-item">
          <span class="feature-check">✓</span>
          <span>{{ feature }}</span>
        </li>
      }
    </ul>
  </div>
</section>

<!-- PROCESS -->
<section class="section">
  <div class="container">
    <app-section-header
      [label]="'process'"
      [title]="tr().services.process.title"
      [centered]="true"
    />
    <div class="process-grid">
      @for (step of tr().services.process.steps; track step.num) {
        <div class="process-step">
          <div class="step-num">{{ step.num }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.desc }}</p>
        </div>
      }
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section alt-bg">
  <div class="container cta-inline">
    <h2>{{ tr().services.cta.title }}</h2>
    <a routerLink="/kontakt" class="btn btn-primary">{{ tr().services.cta.button }}</a>
  </div>
</section>
```

- [ ] **Step 3: Create `src/app/pages/services/services.component.scss`**

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

  &-eyebrow {
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

  &-subtitle {
    font-size: 1.1rem;
    color: var(--text-muted);
    max-width: 520px;
    margin: 0 auto;
    line-height: 1.7;
  }
}

.alt-bg {
  background: var(--bg-secondary);
}

.service-block {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @include desktop {
    flex-direction: row;
    gap: 4rem;
    align-items: flex-start;
  }
}

.service-block-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 0 0 340px;

  h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-muted);
    line-height: 1.7;
  }
}

.service-block-icon {
  font-size: 3rem;
}

.features-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  flex: 1;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  background: rgba(19,19,31,0.6);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  color: var(--text-secondary);
  transition: border-color var(--transition), background var(--transition);

  &:hover {
    border-color: var(--border);
    background: rgba(124, 58, 237, 0.04);
  }
}

.feature-check {
  color: var(--accent-secondary);
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.process-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include desktop {
    grid-template-columns: repeat(4, 1fr);
  }
}

.process-step {
  padding: 2rem;
  background: rgba(19,19,31,0.6);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: border-color var(--transition), transform var(--transition);

  &:hover {
    border-color: rgba(124,58,237,0.4);
    transform: translateY(-4px);
  }

  h3 {
    font-size: 1.1rem;
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

.step-num {
  font-size: 2rem;
  font-weight: 800;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  display: block;
}

.cta-inline {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;

  h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    color: var(--text-primary);
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add src/app/pages/services/
git commit -m "feat: implement Services page"
```

---

