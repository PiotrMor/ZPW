import { Injectable } from '@angular/core';
import data from '../../../FakeData.json'
import { Trip } from '../model/Trip';
import { RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  private path = 'trips/';
  tripsRef: AngularFirestoreCollection<Trip> = null;
  constructor(private http: HttpClient, private db: AngularFirestore ) { 
    this.tripsRef = this.db.collection(this.path);
  }

  getTrips(): Observable<Trip[]> {
    return this.tripsRef.valueChanges();
  }

  addTrip(newTrip: Trip): Promise<any> {
    return this.tripsRef.add(newTrip);
  }

  updateTrip(trip: Trip): Promise<any> {
    return this.tripsRef.doc(trip.id).update(trip);
  }

  deleteTrip(tripId): Promise<any> {
    return this.tripsRef.doc(tripId).delete();
  }

  getTrip(tripId: string): Observable<Trip> {
    return this.db.doc<Trip>(this.path + tripId).snapshotChanges().pipe(map(changes => {
      const data: Trip = changes.payload.data();
      const id = changes.payload.id;
      return {id, ...data};
    }))
  }
/*   getTrip(tripId: string) {
    return this.db.doc(tripId).ref.get().then(document => {
      if (document.exists) {
        console.log("Document data:", (Trip) document.data());
      } else {
        console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  } */





/*   getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.trips_url);
  }



  addTrip(newTrip: Trip): boolean {
    return false;
  }

  deleteTrip(tripId: number): boolean {
    return false;
  } */
}
