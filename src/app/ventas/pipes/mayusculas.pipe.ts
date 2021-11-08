import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'upper'
})
export class MayusculasPipe implements PipeTransform{

  transform(value:string, isUpper:boolean = true):string {
    return (isUpper) ? value.toLocaleUpperCase().trim() : value.toLocaleLowerCase().trim();
  }

}
