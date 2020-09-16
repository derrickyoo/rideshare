import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { ITrip, TripService, createTrip } from '../../services/trip.service';

@Component({
  selector: 'app-rider-request',
  templateUrl: './rider-request.component.html',
  styleUrls: ['./rider-request.component.css'],
})
export class RiderRequestComponent {
  trip: ITrip = createTrip({});

  constructor(private router: Router, private tripService: TripService) {}

  onSubmit(): void {
    this.trip.rider = AuthService.getUser();
    this.tripService.createTrip(this.trip);
    this.router.navigateByUrl('/rider');
  }
}
