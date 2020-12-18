import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TripReview } from '../model/TripReview';
import { TripsService } from './trips.service';

@Injectable({
  providedIn: 'root'
})
export class TripReviewService {

  private path = 'reviews/';

  constructor(private db: AngularFirestore, private tripService: TripsService) {
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
    this.calculateTripRate(review);
    return this.db.collection(this.path).doc<TripReview>(review.id).update(review);
  }

  private calculateTripRate(tripReview: TripReview) {
      let sum = 0;
      for (let userReview of tripReview.reviews) {
        sum += userReview.rate;
      }
      let meanRate = Math.round(sum / tripReview.reviews.length);
      this.tripService.getTrip(tripReview.id).subscribe(trip => {
        trip.rate = meanRate;
        this.tripService.updateTrip(trip).then();
      })

  }
}
