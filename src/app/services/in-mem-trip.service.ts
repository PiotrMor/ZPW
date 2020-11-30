import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import data from '../../../FakeData.json'
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
