import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import * as components from './components';
import * as sharedPipes from './pipes';

export const COMPONENTS = [components.ContainerComponent, components.ScrollTopComponent, components.SectionComponent];

export const PIPES = [sharedPipes.FilterdataPipe];

export const IMPORTS = [CommonModule, FormsModule, ReactiveFormsModule, RouterModule];

export const EXPORTS = [CommonModule, FormsModule, ReactiveFormsModule, RouterModule];
