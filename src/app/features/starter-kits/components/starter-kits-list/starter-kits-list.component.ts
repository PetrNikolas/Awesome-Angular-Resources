import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { StarterKit } from '@models/starter-kit.model';
import { STARTERS } from '@data/starter-kits.data';

@Component({
  imports: [CommonModule, SharedModule],
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
