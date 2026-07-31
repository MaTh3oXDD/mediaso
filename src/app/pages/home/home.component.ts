import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private ts = inject(TranslationService);
  protected tr = this.ts.tr;

  @ViewChild('heroSection') private heroSectionRef?: ElementRef<HTMLElement>;
  @ViewChild('heroVideoWrap') private heroVideoWrapRef?: ElementRef<HTMLElement>;

  protected heroReady = signal(false);

  private targetX = 0;
  private targetY = 0;
  private currentX = 0;
  private currentY = 0;
  private rafId?: number;
  private readonly onMouseMove = (e: MouseEvent) => {
    const hero = this.heroSectionRef?.nativeElement;
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    this.targetX = ((e.clientX - cx) / (rect.width / 2)) * 20;
    this.targetY = ((e.clientY - cy) / (rect.height / 2)) * 20;
  };

  ngAfterViewInit(): void {
    requestAnimationFrame(() => this.heroReady.set(true));

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    window.addEventListener('mousemove', this.onMouseMove);
    const tick = () => {
      this.currentX += (this.targetX - this.currentX) * 0.06;
      this.currentY += (this.targetY - this.currentY) * 0.06;
      const videoWrap = this.heroVideoWrapRef?.nativeElement;
      if (videoWrap) {
        gsap.set(videoWrap, { x: this.currentX, y: this.currentY });
      }
      this.rafId = requestAnimationFrame(tick);
    };
    this.rafId = requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    window.removeEventListener('mousemove', this.onMouseMove);
    if (this.rafId !== undefined) {
      cancelAnimationFrame(this.rafId);
    }
  }

  protected onHeroVideoLoaded(video: HTMLVideoElement): void {
    video.playbackRate = 1.25;
  }
}
