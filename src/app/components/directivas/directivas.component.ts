import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  heroes: string[] = ['Hulk', 'Ironman', 'Batman', 'WonderWoman', 'Spiderman'];
  borrado: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  borrarElemento() {
    this.borrado = this.heroes.shift() || '';
  }

}
