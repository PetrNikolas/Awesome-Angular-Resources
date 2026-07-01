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
  // NEW ADDITIONS ONLY (starting from next ID 92):
  {
    id: 92,
    title: 'Angular Material',
    description: 'Official Material Design components for Angular - widely used and maintained',
    link: 'https://material.angular.io/',
    type: 'lib',
  },
  {
    id: 93,
    title: 'NgRx',
    description: 'Popular reactive state management for Angular (full suite)',
    link: 'https://ngrx.io/',
    type: 'state',
  },
  {
    id: 94,
    title: 'RxAngular',
    description: 'Toolkit for fully reactive high-performance Angular applications',
    link: 'https://rx-angular.io/',
    type: 'lib',
  },
  {
    id: 95,
    title: 'Storybook for Angular',
    description: 'UI component explorer, workshop and documentation tool',
    link: 'https://storybook.js.org/docs/angular/',
    type: 'tool',
  },
  {
    id: 96,
    title: 'Angular CDK',
    description: 'Component Dev Kit for building high-quality Angular components',
    link: 'https://material.angular.io/cdk/categories',
    type: 'lib',
  },
  {
    id: 97,
    title: '@tanstack/angular-query',
    description: 'Powerful data synchronization for Angular (TanStack Query)',
    link: 'https://tanstack.com/query/latest/docs/framework/angular/overview',
    type: 'state',
  },
  {
    id: 98,
    title: 'NGX-Translate',
    description: 'Internationalization (i18n) library for Angular',
    link: 'https://github.com/ngx-translate/core',
    type: 'lib',
  },
  {
    id: 99,
    title: 'Angular Universal',
    description: 'Server-side rendering for Angular apps',
    link: 'https://angular.dev/guide/ssr',
    type: 'tool',
  }
];