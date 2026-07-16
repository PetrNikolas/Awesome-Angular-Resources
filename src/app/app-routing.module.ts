import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('@features/home/components').then((m) => m.HomeComponent),
  },
  {
    path: 'resources',
    loadComponent: () =>
      import('@features/resources/components').then((m) => m.ResourcesComponent),
  },
  {
    path: 'starter-kits',
    loadComponent: () =>
      import('@features/starter-kits/components').then((m) => m.StarterKitsComponent),
  },
  {
    path: 'courses',
    loadComponent: () => import('@features/courses/components').then((m) => m.CoursesComponent),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
