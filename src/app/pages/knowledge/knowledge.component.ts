import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ARTICLES, articlePath } from '../../content/content.registry';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './knowledge.component.html',
  styleUrl: '../../shared/styles/content-page.scss',
})
export class KnowledgeComponent {
  protected articles = ARTICLES;
  protected articlePath = articlePath;
}
