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
  tripList: Trip[];
  totalReservations: number = 0;
  cart: Cart;

  rateFilter: number = 0;
  destinationFilter: string[] = [];
  priceFilter: number[] = [];

  constructor(private tripsService: TripsService) {
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
