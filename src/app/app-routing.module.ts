import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResourcesComponent } from './features/resources';

const routes: Routes = [
  {
    path: '',
    component: ResourcesComponent,
    pathMatch: 'full',
  },
  {
    path: 'resources',
    component: ResourcesComponent,
  },
  {
    path: 'starter-kits',
    component: ResourcesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
