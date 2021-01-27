import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../models/personaje.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  lista:Personaje[] = [
    {
      nombre:'Goku',
      poder: 100000
    },
    {
      nombre:'Bills',
      poder: 2000000
    },
    {
      nombre:'Vegeta',
      poder: 40000
    },
    {
      nombre:'Krilin',
      poder: 10000
    }
  ];

  nuevo:Personaje={
    nombre: "Bulma",
    poder: 100
  }

  agregarNuevoPersonaje(eventPer:Personaje){
    this.lista.push(eventPer);
  }
}
