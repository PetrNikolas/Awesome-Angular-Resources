import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '@core/components/app/app.component';

// Modules
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

export const IMPORTS = [
  BrowserModule,
  FormsModule,
  // ScrollingModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  CoreModule,
  SharedModule,
];

export const PROVIDERS = [];

export const COMPONENTS = [];

export const ROOT_COMPONENT = [AppComponent];
