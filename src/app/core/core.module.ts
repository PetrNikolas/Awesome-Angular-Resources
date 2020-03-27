import { Optional, SkipSelf, NgModule } from '@angular/core';
import { IMPORTS, EXPORTS, COMPONENTS } from './index';

@NgModule({
  imports: [...IMPORTS],
  declarations: [...COMPONENTS],
  providers: [],
  exports: [...EXPORTS],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule has been already loaded. Import only in AppModule');
    }
  }
}
