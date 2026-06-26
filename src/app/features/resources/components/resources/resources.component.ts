import { ResourcesHeroComponent } from '../resources-hero/resources-hero.component';
import { ResourcesListComponent } from '../resources-list/resources-list.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  imports: [CommonModule, SharedModule, ResourcesHeroComponent, ResourcesListComponent],
  standalone: true,
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourcesComponent {}
