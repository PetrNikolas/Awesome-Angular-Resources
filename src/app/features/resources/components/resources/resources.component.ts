import { ResourcesHeroComponent } from '../resources-hero/resources-hero.component';
import { ResourcesListComponent } from '../resources-list/resources-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  imports: [CommonModule, RouterModule, ResourcesHeroComponent, ResourcesListComponent],
  standalone: true,
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourcesComponent {}
