import { Injectable } from '@angular/core';
import data from '../../../FakeData.json'

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

  addTrip() {

  }

  deleteTrip() {

  }
}
