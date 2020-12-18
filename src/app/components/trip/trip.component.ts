import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { Cart } from 'src/app/model/Cart';
import { CartElement } from 'src/app/model/CartElement';
import { Trip } from 'src/app/model/Trip';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {
  isAdmin: boolean = false;
  cart: Cart;

  @Input()
  trip: Trip;

  @Input()
  isCheapest: boolean;

  @Input()
  isMostExpensive: boolean;

  @Output()
  reservationEvent = new EventEmitter<CartElement>();

  @Output()
  removeTripEvent = new EventEmitter<Trip>();

  constructor(private router: Router, private adminGuard: AdminGuard, private tripService: TripsService,private authService: AuthService, private cartService: CartService) { }

  ngOnInit(): void {
    this.adminGuard.canActivate(null, null).subscribe(result => {
      this.isAdmin = result;
    });
    this.authService.getUser().then(user => {
      this.cartService.getCart(user.uid).subscribe(cart => this.cart = cart);
    })
  }

  isAlmostSoldOut(): boolean {
    return this.trip.availablePlaces / this.trip.totalPlaces <= 0.35;
  }

  isSoldOut(): boolean {
    return this.trip.availablePlaces == 0;
  }

  addReservation() {
    this.trip.availablePlaces -= 1;
    this.tripService.updateTrip(this.trip);
    this.reservationEvent.emit(this.getReservationEvent(1));
  }

  removeReservation() {
    if (this.trip.availablePlaces < this.trip.totalPlaces) {
      this.trip.availablePlaces += 1;
      this.tripService.updateTrip(this.trip);
      this.reservationEvent.emit(this.getReservationEvent(-1));
    }
  }

  removeTrip() {
    this.removeTripEvent.emit(this.trip);
  }

  updateTrip() {
    this.router.navigate(["/updateTrip", this.trip.id]);
  }

  getReservationEvent(amount: number): CartElement {
    return {tripId: this.trip.id, amount: amount}
  }

  canRemoveReservation(): boolean {
    let cartContainsTrip: boolean = false;
    if (this.cart != null) {
      for (let element of this.cart.elements) {
        if (element.tripId == this.trip.id) {
          cartContainsTrip = true;
        }
      }
    }
    console.log(this.cart);
    return cartContainsTrip;
  }
}
