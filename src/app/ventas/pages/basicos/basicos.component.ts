import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nameLower:string = "manuel esmerio garcia";
  nameUpper:string = "MANUEL ESMERIO GARCIA";
  completeName:string = 'manuel eSmeriO gArCiA';

  fecha:Date = new Date();

}
