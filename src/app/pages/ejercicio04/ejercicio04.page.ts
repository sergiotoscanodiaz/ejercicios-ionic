import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { CART_CONTENT } from 'src/app/model/cart-content';


@Component({
  selector: 'app-ejercicio04',
  templateUrl: './ejercicio04.page.html',
  styleUrls: ['./ejercicio04.page.scss'],
})
export class Ejercicio04Page implements OnInit {

  carts: Cart[];
  inputItem: any;
  inputPrice: any;
  inputQuantity: any;

  constructor() { }

  ngOnInit() {
    this.carts = CART_CONTENT;
  }
  insertItem() {
    this.carts.push(this.inputItem);
    this.inputItem = null;
  }
  insertPrice() {
    this.carts.push(this.inputPrice);
    this.inputPrice = null;
  }
  insertQuantity() {
    this.carts.push(this.inputQuantity);
    this.inputQuantity = null;
  }
}

