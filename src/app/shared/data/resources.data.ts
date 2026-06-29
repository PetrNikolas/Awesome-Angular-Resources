import { Resource } from '../models/resource.model';

export const RESOURCES: Resource[] = [
  // All previous + new
  {
    id: 82,
    title: 'PrimeNG',
    description: 'The Most Complete UI Component Library for Angular',
    link: 'https://primeng.org/',
    type: 'lib',
  },
  // ... (keep existing structure)
  {
    id: 91,
    title: 'NgRx Signals Integration',
    description: 'State management with modern Angular Signals',
    link: 'https://ngrx.io/guide/signals',
    type: 'state',
  }
];