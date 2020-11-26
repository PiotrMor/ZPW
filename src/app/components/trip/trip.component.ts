import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartElement } from 'src/app/model/CartElement';
import { Trip } from 'src/app/model/Trip';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  isAlmostSoldOut(): boolean {
    return this.trip.availablePlaces / this.trip.totalPlaces <= 0.35;
  }

  isSoldOut(): boolean {
    return this.trip.availablePlaces == 0;
  }

  addReservation() {
    this.trip.availablePlaces -= 1;
    this.reservationEvent.emit(this.getReservationEvent(1));
  }

  removeReservation() {
    if (this.trip.availablePlaces < this.trip.totalPlaces) {
      this.trip.availablePlaces += 1;
      this.reservationEvent.emit(this.getReservationEvent(-1));
    }
  }

  removeTrip() {
    this.removeTripEvent.emit(this.trip);
  }

  getReservationEvent(amount: number): CartElement {
    return {tripId: this.trip.id, amount: amount}
  }
}
