import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './resources-hero.component.html',
  styleUrls: ['./resources-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourcesHeroComponent {}
