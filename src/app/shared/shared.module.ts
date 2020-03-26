import { NgModule } from '@angular/core';
import { IMPORTS, EXPORTS, COMPONENTS, PIPES } from './index';

@NgModule({
  imports: [...IMPORTS],
  exports: [...EXPORTS, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
})
export class SharedModule {}
