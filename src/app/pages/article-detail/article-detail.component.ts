import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ARTICLES, findArticle } from '../../content/content.registry';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-detail.component.html',
  styleUrls: ['../../shared/styles/content-page.scss', './article-motif.scss'],
})
export class ArticleDetailComponent {
  private route = inject(ActivatedRoute);
  private data = toSignal(this.route.data, { initialValue: this.route.snapshot.data });

  protected article = computed(() => findArticle(this.data()['slug'] as string) ?? ARTICLES[0]);

  protected hasMotif = computed(() => this.article().motif === 'pulse');

  protected publishedLabel = computed(() =>
    new Date(this.article().datePublished).toLocaleDateString('pl-PL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  );
}
