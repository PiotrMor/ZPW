import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trip } from 'src/app/model/Trip';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-trip-filter',
  templateUrl: './trip-filter.component.html',
  styleUrls: ['./trip-filter.component.scss']
})
export class TripFilterComponent implements OnInit {
  highestPrice: number = -1;
  lowestPrice: number = -1;
  currentLowestPrice: number;
  currentHighestPrice: number;
  destinations: string[] = [];
  selectedDestinations: string[];
  numberOfDestinations: number;

  @Input()
  trips: Trip[];

  @Output()
  tripsChange = new EventEmitter<Trip[]>();

  @Output()
  rateFilterChange = new EventEmitter<number>();

  @Output()
  destinationFilterChange = new EventEmitter<string[]>();

  @Output()
  priceFilterChange = new EventEmitter<number[]>();

  constructor(private tripsService: TripsService) { }

  ngOnInit(): void {
    this.tripsService.getTrips().subscribe(trips => {
      this.trips = trips;
      this.initializeFilterValues();    
      this.currentLowestPrice = this.lowestPrice;
      this.currentHighestPrice = this.highestPrice;
      this.emitPriceFilter();
    });
    
  }

  initializeFilterValues() {
    this.trips.forEach(trip => {
      if (Number(trip.price) > this.highestPrice || this.highestPrice === -1) {
        this.highestPrice = Number(trip.price);
      }
      if (Number(trip.price) < this.lowestPrice || this.lowestPrice === -1) {
        this.lowestPrice = Number(trip.price);
      }
      if (!this.destinations.includes(trip.destination)) {
        this.destinations.push(trip.destination);
      }
    });
    this.destinations.sort();
    this.numberOfDestinations = this.destinations.length;
  }

  filterByPrice() {


    this.emitPriceFilter();
  }


  filterByRate(value: number) {
    this.rateFilterChange.emit(value);
  }

  filterByDestination(value: string[]) {
    this.destinationFilterChange.emit(value);
  }

  private emitPriceFilter() {
    let value: number[] = [];
    value.push(this.currentLowestPrice as number);
    value.push(this.currentHighestPrice as number);
    this.priceFilterChange.emit(value);
  }
}

