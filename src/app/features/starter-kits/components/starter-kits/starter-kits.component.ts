import { StarterKitsHeroComponent } from '../starter-kits-hero/starter-kits-hero.component';
import { StarterKitsListComponent } from '../starter-kits-list/starter-kits-list.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  imports: [CommonModule, SharedModule, StarterKitsHeroComponent, StarterKitsListComponent],
  standalone: true,
  selector: 'app-starter-kits',
  templateUrl: './starter-kits.component.html',
  styleUrls: ['./starter-kits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarterKitsComponent {}
