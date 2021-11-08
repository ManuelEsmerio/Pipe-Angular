import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  checked:boolean = false;

  ordenarBy: string = '';
  flagBy:boolean = false;

  heroes:Heroe[] = [
    {
      nombre:'Superman',
      vuela:true,
      color: Color.azul
    },
    {
      nombre:'Batman',
      vuela:false,
      color: Color.negro
    },
    {
      nombre:'Flash',
      vuela:false,
      color: Color.rojo
    },
    {
      nombre:'Linterna Verde',
      vuela:true,
      color: Color.verde
    }
  ];


  handleSort(valor: string):void{
    (this.flagBy) ? this.flagBy = false : this.flagBy = true;
    this.ordenarBy = valor;
  }

}
