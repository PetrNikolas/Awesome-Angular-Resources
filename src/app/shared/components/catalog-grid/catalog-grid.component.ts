import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseResource } from '../../models/base-resource.model';
import { Resource } from '../../models/resource.model';

@Component({
  selector: 'app-catalog-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog-grid.component.html',
  styleUrls: ['./catalog-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogGridComponent {
  @Input() items: BaseResource[] = [];
  @Input() displayType: boolean = false;

  redirect(link: string): void {
    window.open(link, '_blank');
  }

  trackByFn(index: number, item: BaseResource): number {
    return item.id;
  }

  isResource(item: BaseResource): item is Resource {
    return 'type' in item;
  }
}
