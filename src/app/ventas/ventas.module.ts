import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Module
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

// Custom pages
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { HomeComponent } from './pages/home/home.component';

// Custom Pipe
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { KilogramosPipe } from './pipes/kilogramos.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';


@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    HomeComponent,
    MayusculasPipe,
    KilogramosPipe,
    VuelaPipe,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule
  ],
  exports:[
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    HomeComponent
  ]
})
export class VentasModule { }
