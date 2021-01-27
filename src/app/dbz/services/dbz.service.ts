import { Injectable } from '@angular/core';
import { Personaje } from '../models/personaje.model';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _lista:Personaje[] = [
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

  get personajes():Personaje[]{
    return [...this._lista];
  }

  constructor() {
    console.log('Servicio Inicializado');
  }

  agregarPersonaje(data: Personaje){
      this._lista.push(data);
  }
}
