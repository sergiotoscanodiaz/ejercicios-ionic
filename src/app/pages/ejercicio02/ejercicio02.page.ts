import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio02',
  templateUrl: './ejercicio02.page.html',
  styleUrls: ['./ejercicio02.page.scss'],
})
export class Ejercicio02Page implements OnInit {

  metros : number = 1;
  centimetros: number = 100;
  pulgadas: number = 39.37;

  constructor() { }

  ngOnInit() {
  }

  convierteMetros() {
    this.centimetros = this.metros * 100;
    this.pulgadas = Math.round(this.metros * 39.3701 * 100) / 100;
  }
  convierteCentimetros() {
    this.metros = Math.round(this.centimetros / 100 * 100) / 100;
    this.pulgadas = Math.round(this.centimetros * 39.3701) / 100;
  }
  conviertePulgadas() {
    this.metros = Math.round(this.pulgadas * 0.0254 * 100) / 100;
    this.centimetros = Math.round(this.pulgadas * 2.54 * 100) / 100;
  }

}
