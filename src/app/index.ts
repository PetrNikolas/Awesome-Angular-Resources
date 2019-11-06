import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// import { ScrollingModule } from '@angular/cdk/scrolling';
// import { AdsenseModule } from 'ng2-adsense';

// Components
import * as coreComponents from './core/components';
import * as resourcesComponents from './features/resources/components';
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
];

export const PROVIDERS = [];

export const COMPONENTS = [
  coreComponents.AppComponent,
  coreComponents.FooterComponent,
  sharedComponents.ScrollTopComponent,
  sharedComponents.ContainerComponent,
  sharedComponents.SectionComponent,
  resourcesComponents.HeroComponent,
  resourcesComponents.ResourcesListComponent,
];

export const ROOT_COMPONENT = [coreComponents.AppComponent];

export const PIPES = [sharedPipes.FilterdataPipe];
