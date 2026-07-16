import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { ContainerComponent } from '@shared/components/container/container.component';

@Component({
  imports: [CommonModule, RouterModule, SectionComponent, ContainerComponent],
  standalone: true,
  selector: 'app-courses-hero',
  templateUrl: './courses-hero.component.html',
  styleUrls: ['./courses-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesHeroComponent {}
