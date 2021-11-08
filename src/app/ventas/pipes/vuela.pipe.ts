import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

  transform(value: boolean): string {
    return (value) ? `El Heroe puede volar.` : `El Heroe no puede volar`;
  }

}
