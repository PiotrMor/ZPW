import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from '../model/Trip';

@Pipe({
  name: 'destinationFilter'
})
export class DestinationFilterPipe implements PipeTransform {

  transform(trips: Trip[], destinations: string[]): Trip[] {
    if (destinations.length === 0) {
      return trips;
    } else {
      return trips.filter(trip => destinations.includes(trip.destination));
    }
  }

}
