import { Component, OnInit } from '@angular/core';

//PrimeNG Component
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  `
    img{
      padding: 0.5em 2em 0.5em 0.5em;
    }
  `
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items:[
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: 'basicos'
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cogs',
        routerLink: 'ordenar'
      }
    ];
  }

}
