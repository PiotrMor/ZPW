import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trip } from 'src/app/model/Trip';

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
  fullTripList: Trip[];
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

  constructor() { }

  ngOnInit(): void {
    this.fullTripList = this.trips;
    this.initializeFilterValues();
    this.currentLowestPrice = this.lowestPrice;
    this.currentHighestPrice = this.highestPrice;
    this.emitPriceFilter();

  }

  initializeFilterValues() {
    this.trips.forEach(trip => {
      if (trip.price > this.highestPrice || this.highestPrice === -1) {
        this.highestPrice = trip.price;
      }
      if (trip.price < this.lowestPrice || this.lowestPrice === -1) {
        this.lowestPrice = trip.price;
      }
      if (!this.destinations.includes(trip.destination)) {
        this.destinations.push(trip.destination);
      }
    });
    this.destinations.sort();
    this.numberOfDestinations = this.destinations.length;
  }

  filterByPrice() {
    if (this.currentLowestPrice < this.lowestPrice) {
      this.currentLowestPrice = this.lowestPrice;
    } else if (this.currentLowestPrice > this.currentHighestPrice) {
      this.currentLowestPrice = this.currentHighestPrice;
    } else if (this.currentHighestPrice > this.highestPrice) {
      this.currentHighestPrice = this.highestPrice
    } else if (this.currentHighestPrice < this.currentLowestPrice) {
      this.currentHighestPrice = this.currentLowestPrice;
    }

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
    value.push(this.currentLowestPrice);
    value.push(this.currentHighestPrice);

    this.priceFilterChange.emit(value);
  }
}

