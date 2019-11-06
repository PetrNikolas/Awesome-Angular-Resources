import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ScrollingModule } from '@angular/cdk/scrolling';
// import { AdsenseModule } from 'ng2-adsense';

// Components
import { AppComponent } from './app.component';
import * as components from './components';

// Pipes
import * as pipes from './pipes';

export const IMPORTS = [
  BrowserModule,
  FormsModule,
  // ScrollingModule,
  /**AdsenseModule.forRoot({
    adClient: 'ca-pub-9049835979972391',
    adSlot: 7259870550,
  }),*/
];

export const PROVIDERS = [];

export const COMPONENTS = [
  AppComponent,
  components.FooterComponent,
  components.HeroComponent,
  components.ResourcesComponent,
  components.ScrollTopComponent,
  components.ContainerComponent,
  components.SectionComponent,
];

export const ROOT_COMPONENT = [AppComponent];

export const PIPES = [pipes.FilterdataPipe];
