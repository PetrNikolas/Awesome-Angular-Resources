import { CoursesHeroComponent } from '../courses-hero/courses-hero.component';
import { CoursesListComponent } from '../courses-list/courses-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  imports: [CommonModule, RouterModule, CoursesHeroComponent, CoursesListComponent],
  standalone: true,
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {}
