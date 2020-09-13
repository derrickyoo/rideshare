import { Component, OnInit } from '@angular/core';

import { AuthService, IUser } from '../../services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  getUser(): IUser {
    return AuthService.getUser();
  }

  logOut(): void {
    this.authService.logOut();
  }
}
