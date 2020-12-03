import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import data from '../../../FakeData.json'

@Injectable({
  providedIn: 'root'
})
export class InMemTripService implements InMemoryDbService {

  constructor() { }
  createDb(): {} | Observable<{}> | Promise<{}> {
    let trips = data;
    return {trips};
  }
}
