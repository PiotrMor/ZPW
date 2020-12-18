import { TestBed } from '@angular/core/testing';

import { TripReviewService } from './trip-review.service';

describe('TripReviewService', () => {
  let service: TripReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
