import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdata',
})
export class FilterdataPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }

    return value.filter(val => {
      const rVal =
        val.title.toLocaleLowerCase().includes(args) ||
        val.description.toLocaleLowerCase().includes(args);
      return rVal;
    });
  }
}
