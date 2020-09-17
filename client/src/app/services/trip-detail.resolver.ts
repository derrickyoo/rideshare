import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';

import { ITrip, TripService } from '../services/trip.service';

@Injectable({
  providedIn: 'root',
})
export class TripDetailResolver implements Resolve<ITrip> {
  constructor(private tripService: TripService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ITrip> {
    return this.tripService.getTrip(route.params.id);
  }
}
