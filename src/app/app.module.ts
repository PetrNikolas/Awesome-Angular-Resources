import { NgModule } from '@angular/core';

import { COMPONENTS, PIPES, IMPORTS, ROOT_COMPONENT, PROVIDERS } from './index';
// import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from '../environments/environment';

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [
    ...IMPORTS,
    /**ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production,
    }),*/
  ],
  providers: [...PROVIDERS],
  bootstrap: [...ROOT_COMPONENT],
})
export class AppModule {}
