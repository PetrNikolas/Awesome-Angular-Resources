jest.mock('@angular/core', () => ({
  Pipe: () => (target: unknown) => target,
}));

import { FilterdataPipe } from './filterdata.pipe';
import { Resource } from '../models/resource.model';

describe('FilterdataPipe', () => {
  const resources: Resource[] = [
    {
      id: 1,
      title: 'Angular Material',
      description: 'Material Design components for Angular',
      link: 'https://material.angular.io/',
      type: 'lib',
    },
    {
      id: 2,
      title: 'RxAngular',
      description: 'Performance focused Angular utilities',
      link: 'https://www.rx-angular.io/',
      type: 'lib',
    },
  ];

  it('matches titles and descriptions case-insensitively', () => {
    const pipe = new FilterdataPipe();

    expect(pipe.transform(resources, 'MATERIAL')).toEqual([resources[0]]);
  });

  it('returns the original list when query is empty', () => {
    const pipe = new FilterdataPipe();

    expect(pipe.transform(resources, '')).toBe(resources);
  });
});
