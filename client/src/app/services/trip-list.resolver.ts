import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';

import { ITrip, TripService } from './trip.service';

@Injectable({
  providedIn: 'root',
})
export class TripListResolver implements Resolve<ITrip[]> {
  constructor(private tripService: TripService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ITrip[]> {
    return this.tripService.getTrips();
  }
}
