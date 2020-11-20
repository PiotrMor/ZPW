import { Component, Input, OnInit } from '@angular/core';
import { CartElement } from 'src/app/model/CartElement';

@Component({
  selector: 'app-cart-element',
  templateUrl: './cart-element.component.html',
  styleUrls: ['./cart-element.component.scss']
})
export class CartElementComponent implements OnInit {
  @Input()
  cartElement: CartElement;

  constructor() { }

  ngOnInit(): void {
  }

}
