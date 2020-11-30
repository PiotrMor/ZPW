import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from '../model/Trip';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(trips: Trip[], args: number[]): Trip[] {
    if (args.length != 2) {
      return trips;
    } else {
      let lowestPrice = args[0];
      let highestPrice = args[1];
      
      return trips.filter(trip => trip.price >= lowestPrice && trip.price <= highestPrice);
    }
    
  }

}
