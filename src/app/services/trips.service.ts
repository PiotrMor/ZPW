import { Injectable } from '@angular/core';
import data from '../../../FakeData.json'
import { Trip } from '../model/Trip';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor() { }

  getTrips(): Trip[] {
    return data;
  }

  getTrip(tripId: number): Trip {
    return null;
  }

  addTrip(newTrip: Trip): boolean {
    return false;
  }

  deleteTrip(tripId: number): boolean {
    return false;
  }
}
