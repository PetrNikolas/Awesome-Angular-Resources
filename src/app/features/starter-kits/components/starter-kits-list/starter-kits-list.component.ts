import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { ContainerComponent } from '@shared/components/container/container.component';
import { ScrollTopComponent } from '@shared/components/scroll-top/scroll-top.component';

import { StarterKit } from '@models/starter-kit.model';
import { STARTERS } from '@data/starter-kits.data';

@Component({
  imports: [CommonModule, RouterModule, FormsModule, SectionComponent, ContainerComponent, ScrollTopComponent],
  standalone: true,
  selector: 'app-starter-kits-list',
  templateUrl: './starter-kits-list.component.html',
  styleUrls: ['./starter-kits-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarterKitsListComponent {
  starters$: StarterKit[];
  queryString = '';

  constructor() {
    this.starters$ = STARTERS;
  }

  redirect(link: string): false {
    window.open(link, '_blank');
    return false;
  }

  trackByFn(index: number, item: StarterKit): number {
    return item.id;
  }
}
