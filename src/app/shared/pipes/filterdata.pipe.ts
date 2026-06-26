import { Pipe, PipeTransform } from '@angular/core';
import { Resource } from '../models/resource.model';

@Pipe({
  name: 'filterdata',
  standalone: true,
})
export class FilterdataPipe implements PipeTransform {
  transform(value: Resource[], args?: string): Resource[] {
    if (!args) {
      return value;
    }

    return value.filter((val: Resource) => {
      const rVal = val.title.toLocaleLowerCase().includes(args) || val.description.toLocaleLowerCase().includes(args);
      return rVal;
    });
  }
}
