import { Component, ChangeDetectionStrategy } from '@angular/core';

import { StarterKit } from '../../../../shared/models/starter-kit.model';
import { STARTERS } from '../../../../shared/data/starter-kits.data';

@Component({
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

  trackByFn(index, item): number {
    return item.id;
  }
}
