import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart;

  constructor(private cartService: CartService, private tripsService: TripsService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getUser().then(user => {
      this.cartService.getCart(user.uid).subscribe(cart => {this.cart = cart; console.log(this.cart);});
    });
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
