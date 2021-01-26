import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroe/heroe.component';



@NgModule({
  declarations: [
    ContadorComponent,
    HeroeComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContadorComponent,
    HeroeComponent,
  ]
})
export class ComponentModule { }
