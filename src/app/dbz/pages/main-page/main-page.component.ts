import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../models/personaje.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo:Personaje={
    nombre: "Bulma",
    poder: 100
  }

}
