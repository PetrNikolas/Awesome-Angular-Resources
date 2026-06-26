import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  imports: [CommonModule, SharedModule],
  standalone: true,
  selector: 'app-courses-hero',
  templateUrl: './courses-hero.component.html',
  styleUrls: ['./courses-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesHeroComponent {}
