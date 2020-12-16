import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { CartService } from 'src/app/services/cart.service';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart;

  constructor(private cartService: CartService, private tripsService: TripsService) {
  }

  ngOnInit(): void {
    this.cartService.getCart("1").subscribe(cart => this.cart = cart);
  }

  getTotalPrice(): number {
    let totalPrice = 0;
/*     this.cart.elements.forEach(element => {
      this.tripsService.getTrip(element.tripId).subscribe(trip => {
        totalPrice += trip.price * element.amount;
        console.log(trip);
      });
    }); */
    return totalPrice;
  }
}
