import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdata',
  standalone: true,
})
export class FilterdataPipe implements PipeTransform {
  transform(value: { title: string; description: string }[], args?: string): { title: string; description: string }[] {
    if (!args) {
      return value;
    }

    return value.filter((val: { title: string; description: string }) => {
      const rVal = val.title.toLocaleLowerCase().includes(args) || val.description.toLocaleLowerCase().includes(args);
      return rVal;
    });
  }
}
