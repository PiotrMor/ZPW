import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { CartElement } from 'src/app/model/CartElement';
import { Trip } from 'src/app/model/Trip';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {
  tripList: Trip[] = [];
  totalReservations: number = 0;
  cart: Cart;

  rateFilter: number = 0;
  destinationFilter: string[] = [];
  priceFilter: number[] = [];

  constructor(private tripsService: TripsService) {
  }
  
  ngOnInit(): void {
    this.tripList = this.tripsService.getTrips();
    this.initializeCart();
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
      this.tripList.splice(tripListIndex, 1);
      this.cart.elements.splice(cartIndex, 1);
    }
  }

  handleReservationEvent(event: CartElement) {
    for (let element of this.cart.elements) {
      if (element.tripId === event.tripId) {
        element.amount += event.amount;
        return;
      }
    }
    this.cart.elements.push(event);
  }

  initializeCart() {
    this.cart = {
      elements: [],
      id: 1
    }
  }

  getCartElementById(id: number): CartElement {
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
