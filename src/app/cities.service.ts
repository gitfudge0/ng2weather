import { Injectable } from '@angular/core';
import { Observable,  } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { city } from './city';

let CITIES: city[] = [
  { id: 1264527, name: 'Chennai'},
  { id: 1275339, name: 'Mumbai'},
  { id: 1275004, name: 'Kolkata'},
  { id: 1277333, name: 'Bangalore'},
  { id: 1273294, name: 'Delhi'},
]

@Injectable()
export class CitiesService {

  constructor() { }

  /**
   * Return list of cities
   */
  getCities(): Observable<city[]> {
    return of(CITIES);
  }

}
