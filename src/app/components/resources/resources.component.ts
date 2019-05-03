import { Component, ChangeDetectionStrategy } from '@angular/core';

import { RESOURCES } from '../../data/data';
import { Resource } from '../../models/resource.model';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourcesComponent {

  resources$: Resource[];
  queryString;

  constructor() {
    this.resources$ = RESOURCES;
  }

  getImage() {
    return Math.floor(Math.random() * 4) + 1;
  }

  redirect(link: string) {
    window.open(link, '_blank');
  }

  trackByFn(index, item) {
    return item.id;
  }
}
