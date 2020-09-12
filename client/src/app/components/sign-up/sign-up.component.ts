import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

class UserData {
  constructor(
    public username?: string,
    public firstName?: string,
    public lastName?: string,
    public password?: string
  ) {}
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  user: UserData = new UserData();

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService
      .signUp(
        this.user.username,
        this.user.firstName,
        this.user.lastName,
        this.user.password
      )
      .subscribe(
        () => {
          this.router.navigateByUrl('/log-in');
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
