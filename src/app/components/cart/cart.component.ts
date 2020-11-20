import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart;

  constructor(private cartService: CartService) {
   }

  ngOnInit(): void {
    this.cart = this.cartService.getCart(1); //TODO: Insert correct id 
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    this.cart.elements.forEach(element => {
      totalPrice += element.trip.price * element.amount;
    });
    return totalPrice;
  }
}
