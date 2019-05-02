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

  trackByFn(index, item) {
    return item.id;
  }
}
