import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Inject, HostListener, ChangeDetectorRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollTopComponent {
  windowScrolled: boolean = false;

  // tslint:disable-next-line: deprecation
  constructor(@Inject(DOCUMENT) private document: Document, private cdr: ChangeDetectorRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      if (!this.windowScrolled) {
        this.windowScrolled = true;
        this.cdr.markForCheck();
      }
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      if (this.windowScrolled) {
        this.windowScrolled = false;
        this.cdr.markForCheck();
      }
    }
  }

  scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
}
