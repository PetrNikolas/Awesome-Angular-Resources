import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Course } from '@models/course.model';
import { COURSES } from '@data/courses.data';

@Component({
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

  trackByFn(index, item): number {
    return item.id;
  }
}
