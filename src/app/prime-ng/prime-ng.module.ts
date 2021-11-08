import { NgModule } from '@angular/core';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToggleButtonModule,
    ToolbarModule,
    TableModule,
    ScrollingModule
  ]
})
export class PrimeNgModule { }
