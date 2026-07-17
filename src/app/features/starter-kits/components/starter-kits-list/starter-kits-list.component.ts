import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { ContainerComponent } from '@shared/components/container/container.component';
import { ScrollTopComponent } from '@shared/components/scroll-top/scroll-top.component';

import { StarterKit } from '@models/starter-kit.model';
import { STARTERS } from '@data/starter-kits.data';

import { CatalogGridComponent } from '@shared/components/catalog-grid/catalog-grid.component';

@Component({
  imports: [CommonModule, SectionComponent, ContainerComponent, ScrollTopComponent, CatalogGridComponent],
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
}
