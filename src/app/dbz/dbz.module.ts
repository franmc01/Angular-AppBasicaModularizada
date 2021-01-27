import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { AgregarComponent } from './components/agregar/agregar.component';



@NgModule({
  declarations: [MainPageComponent, PersonajeComponent, AgregarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent,
    AgregarComponent
  ]
})
export class DbzModule { }
