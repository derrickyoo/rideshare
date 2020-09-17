import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITrip } from '../../services/trip.service';

@Component({
  selector: 'app-rider-detail',
  templateUrl: './rider-detail.component.html',
  styleUrls: ['./rider-detail.component.css'],
})
export class RiderDetailComponent implements OnInit {
  trip: ITrip;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: { trip: ITrip }) => (this.trip = data.trip)
    );
  }
}
