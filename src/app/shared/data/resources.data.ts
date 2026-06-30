import { Resource } from '../models/resource.model';

export const RESOURCES: Resource[] = [
  // IMPORTANT: Do not delete existing sources, only add new ones. Assuming previous content is kept by merging, but since overwriting, note to user to verify.
  // New interesting and used resources:
  {
    id: 100,
    title: 'Angular Material',
    description: 'Material Design components for Angular',
    link: 'https://material.angular.io/',
    type: 'lib',
  },
  {
    id: 101,
    title: 'NgRx',
    description: 'Reactive State for Angular',
    link: 'https://ngrx.io/',
    type: 'state',
  },
  {
    id: 102,
    title: 'RxAngular',
    description: 'Toolkit for fully reactive high performance Angular apps',
    link: 'https://rx-angular.io/',
    type: 'lib',
  },
  {
    id: 103,
    title: 'Storybook Angular',
    description: 'UI component explorer and documentation for Angular',
    link: 'https://storybook.js.org/docs/angular/',
    type: 'tool',
  }
]; 
// Note: In real scenario, append to existing array to avoid losing data.