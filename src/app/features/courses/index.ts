import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import * as components from './components';

export const IMPORTS = [CommonModule, SharedModule];

export const PROVIDERS = [];

export const COMPONENTS = [
  components.CoursesComponent,
  components.CoursesHeroComponent,
  components.CoursesListComponent,
];
