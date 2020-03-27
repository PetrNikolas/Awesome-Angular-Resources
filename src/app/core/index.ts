import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';

import * as components from './components';

export const COMPONENTS = [components.AppComponent, components.FooterComponent, components.HeaderComponent];

export const IMPORTS = [CommonModule, RouterModule, SharedModule];

export const EXPORTS = [CommonModule, RouterModule];
