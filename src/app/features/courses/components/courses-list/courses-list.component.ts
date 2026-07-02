import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Course } from '@models/course.model';
import { COURSES } from '@data/courses.data';

@Component({
  imports: [CommonModule, SharedModule],
  standalone: true,
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListComponent {
  courses$: Course[];
  queryString = '';

  constructor() {
    this.courses$ = COURSES;
  }

  redirect(link: string): false {
    window.open(link, '_blank');
    return false;
  }

  trackByFn(index: number, item: Course): number {
    return item.id;
  }
}
