import { Injectable } from '@angular/core';
import data from '../../../FakeData.json'
import { Trip } from '../model/Trip';
import { RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TripsService {
  private trips_url: string = "api/trips";

  constructor(private http: HttpClient) { }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.trips_url);
    //return data;
  }

  getTrip(tripId: number): Trip {
    for (let trip of data) {
      if (trip.id === tripId) {
        return trip;
      }
    }

    return null;
  }

  addTrip(newTrip: Trip): boolean {
    return false;
  }

  deleteTrip(tripId: number): boolean {
    return false;
  }
}
