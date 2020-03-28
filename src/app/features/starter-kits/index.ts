import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { StarterKitsRoutingModule } from './starter-kits-routing.module';
import { SharedModule } from '@shared/shared.module';

import * as components from './components';

export const IMPORTS = [CommonModule, BrowserModule, StarterKitsRoutingModule, SharedModule];

export const PROVIDERS = [];

export const COMPONENTS = [
  components.StarterKitsComponent,
  components.StarterKitsListComponent,
  components.StarterKitsHeroComponent,
];
