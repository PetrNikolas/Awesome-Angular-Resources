import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import * as components from './components';

export const COMPONENTS = [components.AppComponent, components.FooterComponent, components.HeaderComponent];

export const IMPORTS = [CommonModule, RouterModule];

export const EXPORTS = [CommonModule, RouterModule];
