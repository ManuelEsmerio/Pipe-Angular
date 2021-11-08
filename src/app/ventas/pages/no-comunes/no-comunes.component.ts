import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  //i18nSelect
  name:string = "Manuel Esmerio";
  gender:string = 'male';
  switched:boolean = false;

  mapping = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }


  //i18nPlural
  customers:string[] = ['Manuel', 'Ilse', 'Juan', 'Irene', 'Jose', 'Edgar'];
  pluralMapping = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  // KeyValue Pipe
  person = {
    name:'Manuel',
    year: 26,
    street:'Ottawa, Canadá'
  }

  jsonPipe = [
    {
      name:'Superman',
      power:true
    },
    {
      name:'Robin',
      power:false
    },
    {
      name:'Batman',
      power:false
    },
    {
      name:'Wonder Woman',
      power:true
    },
    {
      name:'Shazam',
      power:true
    }
  ];

  // Async Pipe
  exampleObservable = interval(5000).pipe(tap(() => console.log("Interval")))
  examplePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa');
    },3500)
  });

  constructor() { }

  changeName(){
    if (this.switched) {
      this.name = 'Manuel Esmerio';
      this.gender = 'male';
      this.switched = false;
    }else{
      this.name = 'Ilse Barajas';
      this.gender = 'female';
      this.switched = true;
    }
  }

  btnDelete(){
    if (this.customers.length === 0) {return;}
    this.customers.pop();
  }

}
