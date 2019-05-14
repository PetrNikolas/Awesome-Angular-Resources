import { NgModule } from '@angular/core';

import { COMPONENTS, PIPES, IMPORTS, ROOT_COMPONENT, PROVIDERS } from './index';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],
  imports: [
    ...IMPORTS,
    BrowserAnimationsModule
  ],
  providers: [
    ...PROVIDERS
  ],
  bootstrap: [
    ...ROOT_COMPONENT
  ]
})
export class AppModule { }
