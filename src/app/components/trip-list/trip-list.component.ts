import { Component, OnInit } from '@angular/core';
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

  constructor(private tripsService: TripsService) {
  }
  
  ngOnInit(): void {
    //this.addRandomTrips();
    this.tripList = this.tripsService.getTrips();
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
    let index = this.tripList.indexOf(trip);
    if (index !== -1) {
      this.tripList.splice(index, 1);
      this.totalReservations = trip.totalPlaces - trip.availablePlaces;
    }
  }

  handleReservationEvent(value: number) {
    this.totalReservations += value;
  }
}
