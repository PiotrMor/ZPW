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
      let lowestPrice: number = Number(args[0]);
      let highestPrice: number = Number(args[1]);
      return trips.filter(trip => {
        return trip.price >= lowestPrice && trip.price <= highestPrice});
    }
    
  }

}
