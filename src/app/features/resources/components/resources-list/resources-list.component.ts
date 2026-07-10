import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Resource } from '@shared/models/resource.model';
import { RESOURCES } from '@data/resources.data';

@Component({
  imports: [CommonModule, SharedModule],
  standalone: true,
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourcesListComponent {
  readonly TYPE_ALL = 'all';
  readonly TYPE_FRAMEWORK = 'framework';
  readonly TYPE_LIB = 'lib';
  readonly TYPE_TOOL = 'tool';
  readonly TYPE_PODCAST = 'podcast';
  readonly TYPE_COMMUNITY = 'community';
  readonly TYPE_OTHER = 'other';

  selectedTab = this.TYPE_ALL;
  resources$: Resource[];
  queryString = '';

  constructor() {
    this.resources$ = RESOURCES;
  }

  filterHandler(type: string): void {
    this.selectedTab = type;
    this.applyFilters();
  }

  onSearchQueryChange(query: string): void {
    this.queryString = query;
    this.applyFilters();
  }

  private applyFilters(): void {
    let filtered = RESOURCES;

    if (this.selectedTab !== this.TYPE_ALL) {
      filtered = filtered.filter(item => item.type === this.selectedTab);
    }

    if (this.queryString) {
      const query = this.queryString.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
      );
    }

    this.resources$ = filtered;
  }

  redirect(link: string): false {
    window.open(link, '_blank', 'noopener,noreferrer');
    return false;
  }

  trackByFn(index: number, item: Resource): number {
    return item.id;
  }
}
