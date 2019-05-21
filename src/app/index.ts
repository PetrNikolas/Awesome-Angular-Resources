import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ScrollingModule } from '@angular/cdk/scrolling';

// Components
import { AppComponent } from './app.component';
import * as components from './components';

// Pipes
import * as pipes from './pipes';

export const IMPORTS = [
  BrowserModule,
  FormsModule,
  ScrollingModule
];

export const PROVIDERS = [];

export const COMPONENTS = [
  AppComponent,
  components.FooterComponent,
  components.HeroComponent,
  components.ResourcesComponent,
  components.ScrollTopComponent,
];

export const ROOT_COMPONENT = [
  AppComponent
];

export const PIPES = [
  pipes.FilterdataPipe
];
