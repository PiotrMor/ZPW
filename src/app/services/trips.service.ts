import { Injectable } from '@angular/core';
import { Trip } from '../model/Trip';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  private path = 'trips/';
  tripsRef: AngularFirestoreCollection<Trip> = null;
  constructor(private db: AngularFirestore ) { 
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
    }));
  }
}
