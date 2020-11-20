import { Injectable } from '@angular/core';
import data from '../../../FakeData.json'
import { Trip } from '../model/Trip';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TripsService implements InMemoryDbService {
  SERVER_URL: string = "http://localhost:8080/api/";

  constructor() { }
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    let trips = data;
    return {trips};
  }

  getTrips(): Trip[] {
    return data;
  }

  getTrip(tripId: number): Trip {
    data.forEach(trip =>{
      if (trip.id === tripId) {
        return trip;
      }
    });
    return null;
  }

  addTrip(newTrip: Trip): boolean {
    return false;
  }

  deleteTrip(tripId: number): boolean {
    return false;
  }
}
