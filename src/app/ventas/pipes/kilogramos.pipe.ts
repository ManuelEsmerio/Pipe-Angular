import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kilogramos'
})
export class KilogramosPipe implements PipeTransform {

  transform(num:number): string {
    return `${num} KG`;
  }

}
