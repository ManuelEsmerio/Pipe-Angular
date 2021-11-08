import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'sort'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], orderBy:string = 'sin valor', flag: boolean = false): Heroe[] {

    if (orderBy === 'nombre') {
      return (flag) ? heroes.sort((a,b) => (a.nombre > b.nombre) ? 1: -1) : heroes.sort((a,b) => (a.nombre < b.nombre) ? 1: -1);
    }else if (orderBy === 'vuela') {
      return (flag) ? heroes.filter(item => item.vuela === true) : heroes.filter(item => item.vuela === false);
    }else if (orderBy === 'valores') {
      return (flag) ? heroes.sort((a,b) => (a.color - b.color)) : heroes.sort((a,b) => (b.color - a.color));
    }

    return heroes;
  }

}
