import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { CART_CONTENT } from 'src/app/model/cart-content';

@Component({
  selector: 'app-ejercicio03',
  templateUrl: './ejercicio03.page.html',
  styleUrls: ['./ejercicio03.page.scss'],
})
export class Ejercicio03Page implements OnInit {

  carts: Cart[];

  constructor() { }

  ngOnInit() {
    this.carts = CART_CONTENT;
  }
}
