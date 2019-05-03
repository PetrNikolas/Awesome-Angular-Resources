import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import * as components from './components';

// Pipes
import * as pipes from './pipes';

export const IMPORTS = [
  BrowserModule,
  FormsModule
];

export const PROVIDERS = [];

export const COMPONENTS = [
  AppComponent,
  components.FooterComponent,
  components.HeaderComponent,
  components.HeroComponent,
  components.ResourcesComponent,
  components.PodcastsComponent,
];

export const ROOT_COMPONENT = [
  AppComponent
];

export const PIPES = [
  pipes.FilterdataPipe
];
