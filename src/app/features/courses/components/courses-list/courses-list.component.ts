import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { ContainerComponent } from '@shared/components/container/container.component';
import { ScrollTopComponent } from '@shared/components/scroll-top/scroll-top.component';

import { Course } from '@models/course.model';
import { COURSES } from '@data/courses.data';

@Component({
  imports: [CommonModule, RouterModule, FormsModule, SectionComponent, ContainerComponent, ScrollTopComponent],
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
