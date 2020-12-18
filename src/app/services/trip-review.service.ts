import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TripReview } from '../model/TripReview';

@Injectable({
  providedIn: 'root'
})
export class TripReviewService {

  private path = 'reviews/';

  constructor(private db: AngularFirestore) {
  }

  getReview(tripId: string): Observable<TripReview> {
    return this.db.collection(this.path).doc<TripReview>(tripId).get().pipe(map(d => d.data()));
  }

  createReview(id: string): Promise<any> {
    return this.db.collection(this.path).doc(id).set({
      "id": id,
      "reviews": []
    });
  }

  updateTripReview(review: TripReview): Promise<any> {
    return this.db.collection(this.path).doc<TripReview>(review.id).update(review);
  }
}
