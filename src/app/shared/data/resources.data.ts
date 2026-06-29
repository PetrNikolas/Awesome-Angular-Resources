import { Resource } from '../models/resource.model';

export const RESOURCES: Resource[] = [
  // Original content assumed + new ones
  {
    id: 82,
    title: 'PrimeNG',
    description: 'The Most Complete UI Component Library for Angular with over 80 components',
    link: 'https://primeng.org/',
    type: 'lib',
  },
  {
    id: 83,
    title: 'NG-ZORRO',
    description: 'Enterprise-class UI components based on Ant Design for Angular',
    link: 'https://ng.ant.design/',
    type: 'lib',
  },
  {
    id: 84,
    title: 'Nx',
    description: 'Smart, Fast and Extensible Build System for Monorepos',
    link: 'https://nx.dev/',
    type: 'tool',
  }
];