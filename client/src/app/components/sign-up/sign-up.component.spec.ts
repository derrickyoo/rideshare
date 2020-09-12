import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { createFakeUser } from '../../testing/factories';

import { SignUpComponent } from './sign-up.component';

fdescribe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let router: Router;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [SignUpComponent],
      providers: [AuthService],
    });
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should allow a user to sign up for an account', () => {
    const spy = spyOn(router, 'navigateByUrl');
    const user = createFakeUser();
    component.user = {
      username: user.username,
      firstName: user.first_name,
      lastName: user.last_name,
      password: 'pAssw0rd!',
    };
    component.onSubmit();
    const request = httpMock.expectOne('/api/users/sign_up/');
    request.flush(user);
    expect(spy).toHaveBeenCalledWith('/log-in');
  });
});
