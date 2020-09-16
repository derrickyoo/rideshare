import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './services/auth.service';
import { IsRiderService } from './services/is-rider.service';
import { TripListResolver } from './services/trip-list.resolver';
import { TripService } from './services/trip.service';

import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LandingComponent } from './components/landing/landing.component';
import { RiderComponent } from './components/rider/rider.component';
import { RiderDashboardComponent } from './components/rider-dashboard/rider-dashboard.component';
import { RiderRequestComponent } from './components/rider-request/rider-request.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    LandingComponent,
    RiderComponent,
    RiderDashboardComponent,
    RiderRequestComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthService, IsRiderService, TripListResolver, TripService],
  bootstrap: [AppComponent],
})
export class AppModule {}
