import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Resource } from '../../models';
import { RESOURCES } from '../../data';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourcesComponent {

  readonly TYPE_ALL = 'all';
  readonly TYPE_FRAMEWORK = 'framework';
  readonly TYPE_LIB = 'lib';
  readonly TYPE_TOOL = 'tool';
  readonly TYPE_STARTER = 'starter';
  readonly TYPE_PODCAST = 'podcast';
  readonly TYPE_COMMUNITY = 'community';
  readonly TYPE_OTHER = 'other';

  selectedTab$ = this.TYPE_ALL;

  resources$: Resource[];
  queryString = '';

  constructor() {
    this.resources$ = RESOURCES;
  }

  filterHandler(type: string): void {
    this.selectedTab$ = type;
    const data = RESOURCES;

    if (type === 'all') {
      this.resources$ = data;
      return;
    }

    this.resources$ = data.filter(item => item.type === type);
    return;
  }

  getImage(): number {
    return Math.floor(Math.random() * 4) + 1;
  }

  redirect(link: string): false {
    window.open(link, '_blank');
    return false;
  }

  trackByFn(index, item): number {
    return item.id;
  }
}
