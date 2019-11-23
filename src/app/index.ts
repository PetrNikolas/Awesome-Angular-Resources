import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { ScrollingModule } from '@angular/cdk/scrolling';
// import { AdsenseModule } from 'ng2-adsense';

import { AppRoutingModule } from './app-routing.module';

// Components
import * as coreComponents from './core/components';
import * as homeComponents from './features/home';
import * as resourcesComponents from './features/resources';
import * as starterKitsComponents from './features/starter-kits';
import * as sharedComponents from './shared/components';

// Pipes
import * as sharedPipes from './shared/pipes';

export const IMPORTS = [
  BrowserModule,
  FormsModule,
  // ScrollingModule,
  /**AdsenseModule.forRoot({
    adClient: 'ca-pub-9049835979972391',
    adSlot: 7259870550,
  }),*/
  BrowserAnimationsModule,
  AppRoutingModule,
];

export const PROVIDERS = [];

export const COMPONENTS = [
  coreComponents.AppComponent,
  coreComponents.FooterComponent,
  sharedComponents.ScrollTopComponent,
  sharedComponents.ContainerComponent,
  sharedComponents.SectionComponent,
  homeComponents.HomeComponent,
  homeComponents.HeroComponent,
  resourcesComponents.ResourcesComponent,
  resourcesComponents.HeroComponent,
  resourcesComponents.ResourcesListComponent,
  starterKitsComponents.HeroComponent,
  starterKitsComponents.StarterKitsComponent,
  starterKitsComponents.StarterKitsListComponent,
];

export const ROOT_COMPONENT = [coreComponents.AppComponent];

export const PIPES = [sharedPipes.FilterdataPipe];
