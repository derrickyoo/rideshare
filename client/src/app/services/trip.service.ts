import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';

import { AuthService, IUser, createUser } from './auth.service';

export interface ITrip {
  id: string;
  created: string;
  modified: string;
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
    modified: data.modified,
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
  webSocket: WebSocketSubject<any>;
  messages: Observable<any>;

  constructor(private http: HttpClient) {}

  connect(): void {
    if (!this.webSocket || this.webSocket.closed) {
      const accessToken = AuthService.getAccessToken();
      this.webSocket = webSocket(
        `ws://localhost:8080/rideshare/?token=${accessToken}`
      );
      this.messages = this.webSocket.pipe(share());
      this.messages.subscribe((message) => console.log(message));
    }
  }

  getTrips(): Observable<ITrip[]> {
    const accessToken = AuthService.getAccessToken();
    const headers = new HttpHeaders({ Authorization: `Bearer ${accessToken}` });

    return this.http
      .get<ITrip[]>('/api/trips/', { headers })
      .pipe(
        map((trips: ITrip[]) => trips.map((trip: ITrip) => createTrip(trip)))
      );
  }

  createTrip(trip: ITrip): void {
    this.connect();
    const message: any = {
      type: 'create.trip',
      data: {
        ...trip,
        rider: trip.rider.id,
      },
    };
    this.webSocket.next(message);
  }

  getTrip(id: string): Observable<ITrip> {
    const accessToken = AuthService.getAccessToken();
    const headers = new HttpHeaders({ Authorization: `Bearer ${accessToken}` });
    return this.http
      .get<ITrip>(`/api/trip/${id}/`, { headers })
      .pipe(map((trip: ITrip) => createTrip(trip)));
  }
}
