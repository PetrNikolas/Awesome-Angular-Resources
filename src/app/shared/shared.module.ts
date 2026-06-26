import { NgModule } from '@angular/core';
import { IMPORTS, EXPORTS, COMPONENTS, PIPES } from './index';

@NgModule({
  imports: [...IMPORTS, ...COMPONENTS, ...PIPES],
  exports: [...EXPORTS, ...COMPONENTS, ...PIPES],
  declarations: [],
})
export class SharedModule {}
