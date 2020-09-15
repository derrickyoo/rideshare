import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './services/auth.service';
import { IsRider } from './services/is-rider.service';

import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LandingComponent } from './components/landing/landing.component';
import { RiderComponent } from './components/rider/rider.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    LandingComponent,
    RiderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthService, IsRider],
  bootstrap: [AppComponent],
})
export class AppModule {}
