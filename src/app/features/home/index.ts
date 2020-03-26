import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';

import * as components from './components';

export const IMPORTS = [CommonModule, BrowserModule, HomeRoutingModule, SharedModule];

export const PROVIDERS = [];

export const COMPONENTS = [components.HomeComponent, components.HomeHeroComponent, components.HomeBoxesComponent];
