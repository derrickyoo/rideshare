import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsRider } from './services/is-rider.service';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LandingComponent } from './components/landing/landing.component';
import { RiderComponent } from './components/rider/rider.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LogInComponent },
  {
    path: 'rider',
    component: RiderComponent,
    canActivate: [IsRider],
  },
  { path: '', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
