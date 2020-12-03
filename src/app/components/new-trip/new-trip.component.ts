import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Trip } from 'src/app/model/Trip';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.scss']
})
export class NewTripComponent implements OnInit {
  tripForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      destination: new FormControl('',Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      totalPlaces: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    }
  );


  constructor(private tripsService: TripsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let newTrip: Trip;
    newTrip = this.tripForm.value;
    newTrip.availablePlaces = newTrip.totalPlaces;
    this.tripsService.addTrip(newTrip).then(ref => {
      ref.set({id: ref.id}, {merge: true}).then(() => {
        this.router.navigate(["trips"]);
      })
    });
  }

}