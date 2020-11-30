import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from '../model/Trip';

@Pipe({
  name: 'rateFilter'
})
export class RateFilterPipe implements PipeTransform {

  transform(trips: Trip[], minimalRating: number): Trip[] {
    if (minimalRating === 0) {
      return trips;
    } else {
      return trips.filter(trip => trip.rate >= minimalRating);
    }
  }

}
