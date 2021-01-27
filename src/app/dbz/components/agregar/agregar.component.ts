import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../../models/personaje.model';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {


  constructor(private dbz:DbzService) { }

  ngOnInit(): void {
  }

  @Input('nuevo') nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  Agregar() {
    if (this.nuevoPersonaje.nombre.trim().length === 0) { return; }
    console.log(this.nuevoPersonaje);
    // this.onNuevoPersonaje.emit(this.nuevoPersonaje);
    this.dbz.agregarPersonaje(this.nuevoPersonaje);
    this.nuevoPersonaje = {
      nombre: '',
      poder:0
    }


  }

}
