import { CommonModule } from '@angular/common';

import * as components from './components';

export const IMPORTS = [CommonModule];

export const PROVIDERS = [];

export const COMPONENTS = [
  components.ResourcesComponent,
  components.ResourcesListComponent,
  components.ResourcesHeroComponent,
];
