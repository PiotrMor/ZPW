import { TestBed } from '@angular/core/testing';

import { InMemTripService } from './in-mem-trip.service';

describe('InMemTripService', () => {
  let service: InMemTripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemTripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
