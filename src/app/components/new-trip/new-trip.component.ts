import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from 'src/app/model/Trip';
import { TripReviewService } from 'src/app/services/trip-review.service';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.scss']
})
export class NewTripComponent implements OnInit {
  tripCopy: Trip
  updateMode = false;
  tripId: string;
  availablePlaces: string;
  tripForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      totalPlaces: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      additionalImages: new FormArray([new FormControl('', Validators.required)])
    }
  );


  constructor(private tripsService: TripsService, private router: Router, private route: ActivatedRoute, private reviewService: TripReviewService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.has("id")) {
        this.updateMode = true;
        this.tripId = params.get("id");
        this.availablePlaces = params.get("availablePlaces");
        this.tripsService.getTrip(params.get("id")).subscribe(result => {
          this.tripCopy = { ...result };
          console.log(result);
          delete result.id;
          delete result.availablePlaces;
          delete result.rate;
          if (result.startDate["seconds"] != null) {
            result.startDate = new Date(result.startDate["seconds"] * 1000).toISOString();
          }
          if (result.endDate["seconds"] != null) {
            result.endDate = new Date(result.endDate["seconds"] * 1000).toISOString();
          }
          while (result.additionalImages.length > this.getAdditionalImagesForm().length) {
            this.addImageFormField();
          }
          this.tripForm.setValue(result);
        });
      }
    });
  }

  onImagesFormChange(event) {
    const numberOfImages = event.target.value | 0;
    let imagesForm = this.getAdditionalImagesForm();
    if (imagesForm.length < numberOfImages) {
      imagesForm.push(new FormControl('', Validators.required));
    } else {
      imagesForm.removeAt(event.target.value - 1);
    }
  }

  addImageFormField() {
    let imagesForm = this.getAdditionalImagesForm();
    imagesForm.push(new FormControl('', Validators.required));
  }

  removeImageFormField() {
    let imagesForm = this.getAdditionalImagesForm();
    imagesForm.removeAt(imagesForm.length - 1);
  }

  getAdditionalImagesForm(): FormArray {
    return this.tripForm.controls.additionalImages as FormArray;
  }

  onSubmit() {
    let newTrip: Trip;
    newTrip = this.tripForm.value;
    newTrip.rate = 0;
    newTrip.availablePlaces = newTrip.totalPlaces;
    if (!this.updateMode) {
      this.tripsService.addTrip(newTrip).then(ref => {
        ref.set({ id: ref.id }, { merge: true }).then(() => {
          this.router.navigate(["trips"]);
          this.reviewService.createReview(ref.id).then();
        })
      });
    } else {
      console.log(newTrip);
      newTrip.id = this.tripCopy.id;
      if (this.tripCopy.rate != null) {
        newTrip.rate = this.tripCopy.rate;
      }
      newTrip.availablePlaces = this.tripCopy.availablePlaces;
      this.tripsService.updateTrip(newTrip).then(() => {
        this.router.navigate(["trips"]);
      });
    }
  }

}