import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-starter-kits-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
