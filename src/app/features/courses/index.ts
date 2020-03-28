import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '@shared/shared.module';

import * as components from './components';

export const IMPORTS = [CommonModule, BrowserModule, CoursesRoutingModule, SharedModule];

export const PROVIDERS = [];

export const COMPONENTS = [
  components.CoursesComponent,
  components.CoursesHeroComponent,
  components.CoursesListComponent,
];
