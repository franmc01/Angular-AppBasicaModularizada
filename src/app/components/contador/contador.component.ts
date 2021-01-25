import { Component } from '@angular/core';

@Component({
  selector: 'contador-app',
  templateUrl: 'contador.component.html',
  styleUrls: ['contador.component.css']
})
export class ContadorComponent {
  title: string = 'Contador App';
  numero: number = 0;
  base:number = 5;

  acumular(valor:number) {
    this.numero += valor;
  }
}
