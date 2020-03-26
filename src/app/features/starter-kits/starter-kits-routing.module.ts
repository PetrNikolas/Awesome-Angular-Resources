import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarterKitsComponent } from './components';

const routes: Routes = [
  {
    path: 'starter-kits',
    component: StarterKitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarterKitsRoutingModule {}
