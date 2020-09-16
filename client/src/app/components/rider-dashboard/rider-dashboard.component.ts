import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITrip } from '../../services/trip.service';

@Component({
  selector: 'app-rider-dashboard',
  templateUrl: './rider-dashboard.component.html',
  styleUrls: ['./rider-dashboard.component.css'],
})
export class RiderDashboardComponent implements OnInit {
  trips: ITrip[];

  constructor(private route: ActivatedRoute) {}

  get currentTrips(): ITrip[] {
    return this.trips.filter((trip) => {
      return trip.driver !== null && trip.status !== 'COMPLETED';
    });
  }

  get completedTrips(): ITrip[] {
    return this.trips.filter((trip) => {
      return trip.status === 'COMPLETED';
    });
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: { trips: ITrip[] }) => (this.trips = data.trips)
    );
  }
}
