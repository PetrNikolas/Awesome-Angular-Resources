import { NgModule } from '@angular/core';

import { COMPONENTS, PIPES, IMPORTS, ROOT_COMPONENT, PROVIDERS } from './index';

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],
  imports: [
    ...IMPORTS
  ],
  providers: [
    ...PROVIDERS
  ],
  bootstrap: [
    ...ROOT_COMPONENT
  ]
})
export class AppModule { }
