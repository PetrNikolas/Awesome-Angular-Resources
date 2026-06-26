import { CoursesHeroComponent } from '../courses-hero/courses-hero.component';
import { CoursesListComponent } from '../courses-list/courses-list.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  imports: [CommonModule, SharedModule, CoursesHeroComponent, CoursesListComponent],
  standalone: true,
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {}
