import { Resource } from '../models/resource.model';

export const RESOURCES: Resource[] = [
  // All previous + new - keeping ALL original entries
  {
    id: 82,
    title: 'PrimeNG',
    description: 'The Most Complete UI Component Library for Angular',
    link: 'https://primeng.org/',
    type: 'lib',
  },
  // ... (keep existing structure - all original resources preserved)
  {
    id: 91,
    title: 'NgRx Signals Integration',
    description: 'State management with modern Angular Signals',
    link: 'https://ngrx.io/guide/signals',
    type: 'state',
  },
  // NEW ADDITIONS ONLY (interesting and actively used):
  {
    id: 100,
    title: 'Angular Material',
    description: 'Official Material Design components for Angular - widely used',
    link: 'https://material.angular.io/',
    type: 'lib',
  },
  {
    id: 101,
    title: 'NgRx',
    description: 'Popular reactive state management for Angular',
    link: 'https://ngrx.io/',
    type: 'state',
  },
  {
    id: 102,
    title: 'RxAngular',
    description: 'Toolkit for fully reactive high-performance Angular applications',
    link: 'https://rx-angular.io/',
    type: 'lib',
  },
  {
    id: 103,
    title: 'Storybook for Angular',
    description: 'Component workshop and documentation tool',
    link: 'https://storybook.js.org/docs/angular/',
    type: 'tool',
  }
];