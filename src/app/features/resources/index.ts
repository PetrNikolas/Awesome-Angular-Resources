import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ResourcesRoutingModule } from './resources-routing.module';
import { SharedModule } from '@shared/shared.module';

import * as components from './components';

export const IMPORTS = [CommonModule, BrowserModule, ResourcesRoutingModule, SharedModule];

export const PROVIDERS = [];

export const COMPONENTS = [components.ResourcesComponent, components.ResourcesListComponent, components.HeroComponent];
