import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { ContainerComponent } from '@shared/components/container/container.component';
import { ScrollTopComponent } from '@shared/components/scroll-top/scroll-top.component';

import { Course } from '@models/course.model';
import { COURSES } from '@data/courses.data';

import { CatalogGridComponent } from '@shared/components/catalog-grid/catalog-grid.component';

@Component({
  imports: [CommonModule, SectionComponent, ContainerComponent, ScrollTopComponent, CatalogGridComponent],
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
}
