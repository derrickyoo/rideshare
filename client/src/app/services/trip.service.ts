import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService, IUser, createUser } from './auth.service';

export interface ITrip {
  id: string;
  created: string;
  updated: string;
  pick_up_address: string;
  drop_off_address: string;
  status: string;
  driver: IUser;
  rider: IUser;
}

export const createTrip = (data: any): ITrip => {
  return {
    id: data.id,
    created: data.created,
    updated: data.updated,
    pick_up_address: data.pick_up_address,
    drop_off_address: data.drop_off_address,
    status: data.status,
    driver: data.driver ? createUser(data.driver) : null,
    rider: data.rider ? createUser(data.rider) : null,
  };
};

@Injectable({
  providedIn: 'root',
})
export class TripService {
  constructor(private http: HttpClient) {}

  getTrips(): Observable<ITrip[]> {
    const accessToken = AuthService.getAccessToken();
    const headers = new HttpHeaders({ Authorization: `Bearer ${accessToken}` });

    return this.http
      .get<ITrip[]>('/api/trips/', { headers })
      .pipe(
        map((trips: ITrip[]) => trips.map((trip: ITrip) => createTrip(trip)))
      );
  }
}
