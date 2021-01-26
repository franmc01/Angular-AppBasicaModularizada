import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string,
  poder: number
}

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
  nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }

  Agregar() {
    if (this.nuevoPersonaje.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevoPersonaje);
    this.lista.push(this.nuevoPersonaje);
    this.nuevoPersonaje = {
      nombre: '',
      poder:0
    }

  }

}
