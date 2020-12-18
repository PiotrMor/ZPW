import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from 'src/app/model/Trip';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {
  rate = 0;
  trip: Trip;
  images = [];
  constructor(private tripsService: TripsService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tripsService.getTrip(params.get('id')).subscribe(trip => {
        console.log(trip);
        this.trip = trip;
        this.rate = trip.rate;
        this.images = [];
        for (let image of trip.additionalImages) {
          this.images.push({path: image});
        }
      });
    });
  }

}
