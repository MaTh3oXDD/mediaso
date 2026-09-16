import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { SERVICE_PAGES, findService } from '../../content/content.registry';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-detail.component.html',
  styleUrl: '../../shared/styles/content-page.scss',
})
export class ServiceDetailComponent {
  private route = inject(ActivatedRoute);

  /** Slug siedzi w danych trasy, nie w parametrze - każda usługa ma własny wpis w routerze. */
  private data = toSignal(this.route.data, { initialValue: this.route.snapshot.data });

  protected page = computed(() => findService(this.data()['slug'] as string) ?? SERVICE_PAGES[0]);
}
