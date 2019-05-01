import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

// Pipes
import { FilterdataPipe } from './pipes/filterdata.pipe';

export const IMPORTS = [
  BrowserModule,
  FormsModule
];

export const PROVIDERS = [];

export const COMPONENTS = [
  AppComponent,
  FooterComponent,
  HeaderComponent,
  HeroComponent,
  ResourcesComponent,
  NewsletterComponent,
  TestimonialsComponent,
];

export const ROOT_COMPONENT = [
  AppComponent
];

export const PIPES = [
  FilterdataPipe
];
