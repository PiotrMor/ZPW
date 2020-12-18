import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripReview } from 'src/app/model/TripReview';
import { UserReview } from 'src/app/model/UserReview';
import { AuthService } from 'src/app/services/auth.service';
import { TripReviewService } from 'src/app/services/trip-review.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-review-section',
  templateUrl: './review-section.component.html',
  styleUrls: ['./review-section.component.scss']
})
export class ReviewSectionComponent implements OnInit {
  tripReview: TripReview;
  canAddReview = false;
  newRate: number = 0;

  constructor(private reviewService: TripReviewService, private authService: AuthService, private userService: UserService, private route: ActivatedRoute) { }
  reviewForm = new FormGroup(
    {
      opinion: new FormControl('', Validators.required)
    }
  );

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.reviewService.getReview(params.get('id')).subscribe(review => {
        console.log(review);
        this.tripReview = review;
        this.authService.getUser().then(auth => {
          let hasUserReviewed = false;
          for (let review of this.tripReview.reviews) {
            if (review.userId === auth.uid) {
              hasUserReviewed = true;
            }
          }
          console.log("Has user reviewed: " + hasUserReviewed);
          this.userService.getUser(auth.uid).subscribe(user => {
            let hasUserReservedTrip = user.reservedTrips.includes(params.get('id'));
            console.log(user.reservedTrips)
            console.log("hasUserReservedTrip: " + hasUserReservedTrip);
            this.canAddReview = !hasUserReviewed && hasUserReservedTrip
            console.log("Can add review: " + this.canAddReview);
          })
        })
      });

    });
  }

  onSubmit() {
    let userReview: UserReview = this.reviewForm.value;
    userReview.rate = this.newRate;
    this.authService.getUser().then(user => {
      userReview.userId = user.uid;
      userReview.username = user.email;
      this.tripReview.reviews.push(userReview);
      this.reviewService.updateTripReview(this.tripReview);
    })
  }

}
