import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsRiderService } from './services/is-rider.service';
import { TripListResolver } from './services/trip-list.resolver';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LandingComponent } from './components/landing/landing.component';
import { RiderComponent } from './components/rider/rider.component';
import { RiderDashboardComponent } from './components/rider-dashboard/rider-dashboard.component';
import { RiderRequestComponent } from './components/rider-request/rider-request.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LogInComponent },
  {
    path: 'rider',
    component: RiderComponent,
    canActivate: [IsRiderService],
    children: [
      { path: 'request', component: RiderRequestComponent },
      {
        path: '',
        component: RiderDashboardComponent,
        resolve: { trips: TripListResolver },
      },
    ],
  },
  { path: '', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
