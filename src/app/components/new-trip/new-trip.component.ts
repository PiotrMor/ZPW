import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from 'src/app/model/Trip';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.scss']
})
export class NewTripComponent implements OnInit {
  trip: Trip
  tripForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      totalPlaces: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    }
  );


  constructor(private tripsService: TripsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.has("id")) {
        this.tripsService.getTrip(params.get("id")).subscribe(result => {
          this.trip = result;
          this.tripForm.setValue(result);
        });
      }
    });
  }

  onSubmit() {
    let newTrip: Trip;
    newTrip = this.tripForm.value;
    newTrip.availablePlaces = newTrip.totalPlaces;
    if (newTrip.id === null) {
      this.tripsService.addTrip(newTrip).then(ref => {
        ref.set({ id: ref.id }, { merge: true }).then(() => {
          this.router.navigate(["trips"]);
        })
      });
    } else {
      this.tripsService.updateTrip(newTrip).then(() => {
        this.router.navigate(["trips"]);
      })
    }

  }

}