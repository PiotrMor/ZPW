import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { CartElement } from 'src/app/model/CartElement';
import { Trip } from 'src/app/model/Trip';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { TripsService } from 'src/app/services/trips.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {
  tripList: Trip[];
  totalReservations: number = 0;
  cart: Cart;

  rateFilter: number = 0;
  destinationFilter: string[] = [];
  priceFilter: number[] = [];

  constructor(private tripsService: TripsService, 
    private cartService: CartService,
    private authService: AuthService,
    private userService: UserService
    ) {
  }

  ngOnInit(): void {
    this.fetchTripsList();
    this.initializeCart();
  }

  fetchTripsList(): void {
    this.tripsService.getTrips().subscribe(trips => {
      console.log(trips);
      this.tripList = trips
      for (let trip of this.tripList) {
        trip.startDate = new Date(trip.startDate["seconds"] * 1000).toLocaleDateString();
        trip.endDate = new Date(trip.endDate["seconds"] * 1000).toLocaleDateString();
      }
    });
  }

  initializeCart() {
    this.authService.getUser().then(user => {
      this.cartService.getCart(user.uid).subscribe(cart => {
        this.cart = cart;
      })
    })
  }

  isCheapest(trip: Trip): boolean {
    for (var element of this.tripList) {
      if (trip.price > element.price) {
        return false;
      }
    }
    return true;
  }

  isMostExpensive(trip: Trip): boolean {
    for (var element of this.tripList) {
      if (trip.price < element.price) {
        return false;
      }
    }
    return true;
  }

  removeTrip(trip: Trip) {
    let tripListIndex = this.tripList.indexOf(trip);
    let cartIndex = this.cart.elements.indexOf(this.getCartElementById(trip.id));
    if (tripListIndex !== -1) {
      this.tripsService.deleteTrip(trip.id).then(() => { this.cart.elements.splice(cartIndex, 1); this.fetchTripsList() });
    }
  }

  handleReservationEvent(event: CartElement) {
    for (let element of this.cart.elements) {
      if (element.tripId === event.tripId) {
        element.amount += event.amount;
        if (element.amount == 0) {
          this.tripNoLongerReservedByUser(event.tripId);
          this.cart.elements.splice(this.cart.elements.indexOf(element), 1);
        }
        this.updateCart();
        return;
      }
    }
    this.cart.elements.push(event);
    this.userService.getUser(this.cart.id).subscribe(user => {
      user.reservedTrips.push(event.tripId);
      this.userService.updateUser(user).then(() => console.log("New trip reserved by user"));
    });
    this.updateCart();
  }

  updateCart() {
    this.cartService.updateCart(this.cart)
    .then(() => console.log("Reservation added to cart"))
    .catch(err => console.log(err));
  }

  tripNoLongerReservedByUser(tripId: string) {
    this.userService.getUser(this.cart.id).subscribe(user => {
      let index: number;
      for (let i = 0; i < user.reservedTrips.length; i++) {
        if (user.reservedTrips[i] == tripId) {
          index = i;
        }
      }
      user.reservedTrips.splice(index, 1);
      this.userService.updateUser(user).then(() => console.log("Trip no longer reserved by user"));
    });
  }

  getCartElementById(id: string): CartElement {
    for (let element of this.cart.elements) {
      if (element.tripId === id) {
        return element;
      }
    }
    return null;
  }

  rateFilterChange(value: number) {
    this.rateFilter = value;
  }

  destinationFilterChange(value: string[]) {
    this.destinationFilter = value;
  }

  priceFilterChange(value: number[]) {
    this.priceFilter = value;
  }
}
