import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:string = "Ironman";
  edad: number = 45;

  get nombreCapitalizado(){
    return this.heroe.toLocaleUpperCase();
  }

  obtenerNombre():string{
    return `${ this.heroe } desde el método`;
  }

  cambiarHeroe():void{
    this.heroe = 'Spiderman';
  }
  cambiarEdad():void{
    this.edad = 19;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
