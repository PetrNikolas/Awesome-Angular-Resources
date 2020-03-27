import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { ScrollingModule } from '@angular/cdk/scrolling';
// import { AdsenseModule } from 'ng2-adsense';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '@core/components/app/app.component';

// Modules
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { HomeModule } from '@features/home/home.module';
import { StarterKitsModule } from '@features/starter-kits/starter-kits.module';
import { ResourcesModule } from '@features/resources/resources.module';

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
  CoreModule,
  SharedModule,
  HomeModule,
  StarterKitsModule,
  ResourcesModule,
];

export const PROVIDERS = [];

export const COMPONENTS = [];

export const ROOT_COMPONENT = [AppComponent];
