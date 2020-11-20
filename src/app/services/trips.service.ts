import { Injectable } from '@angular/core';
import data from '../../../FakeData.json'
import { Trip } from '../model/Trip';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor() { }

  getTrips() {
    return data;
  }

  getTrip() {
  }

  addTrip(newTrip: Trip) {
    
  }

  deleteTrip() {

  }
}
