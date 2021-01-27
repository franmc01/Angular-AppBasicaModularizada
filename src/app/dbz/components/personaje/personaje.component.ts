import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  // @Input() personajes:any[]=[];
  get personajes(){
    return this.dbzService.personajes;
  }
  constructor(private dbzService:DbzService) { }

  ngOnInit(): void {
  }

}
