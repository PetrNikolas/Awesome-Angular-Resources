import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    ResourcesComponent,
    NewsletterComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
