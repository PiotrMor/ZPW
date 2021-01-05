import { InjectionToken } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';


import { TripsService } from './trips.service';

describe('TripsServiceService', () => {
  let service: TripsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AngularFireModule.initializeApp(environment.firebaseConfig)] });
    service = TestBed.inject(TripsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
