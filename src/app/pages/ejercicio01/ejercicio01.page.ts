import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio01',
  templateUrl: './ejercicio01.page.html',
  styleUrls: ['./ejercicio01.page.scss'],
})
export class Ejercicio01Page implements OnInit {

  minValue = 0;
  maxValue = 0;
  randomNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  generateNumber() {
    this.randomNumber = +this.minValue + Math.floor(Math.random() * (this.maxValue - this.minValue + 1));
  }

}
