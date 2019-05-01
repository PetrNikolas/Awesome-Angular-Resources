import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    ResourcesComponent,
    NewsletterComponent,
    TestimonialsComponent,
    FilterdataPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
