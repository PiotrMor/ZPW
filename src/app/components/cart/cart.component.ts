import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { Trip } from 'src/app/model/Trip';
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
  trips: Trip[];
  totalPrice: number = 0;

  constructor(private cartService: CartService, private tripsService: TripsService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getUser().then(user => {
      this.cartService.getCart(user.uid).subscribe(cart => {this.cart = cart; this.getTotalPrice()});
    });
    this.tripsService.getTrips().subscribe(trips => this.trips = trips);
  }

  getTripById(id: string) {
    return this.trips.filter(trip => trip.id === id)[0];
  }

  getTotalPrice() {
    this.cart.elements.forEach(element => {
      this.totalPrice += element.amount * Number(this.getTripById(element.tripId).price);
    });
  }
}
