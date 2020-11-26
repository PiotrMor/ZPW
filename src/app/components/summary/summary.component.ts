import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { Trip } from 'src/app/model/Trip';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input()
  cart: Cart;

  constructor(private tripsService: TripsService) {
  }

  ngOnInit(): void {

  }

  getNumberOfReservations() {
    let numberOfReservations = 0;
    this.cart.elements.forEach(element => {
      numberOfReservations += element.amount;
    });
    return numberOfReservations;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.cart.elements.forEach(element => {
      totalPrice += this.tripsService.getTrip(element.tripId).price * element.amount;
    })
    return totalPrice;
  }
}
