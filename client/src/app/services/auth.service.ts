import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface IUser {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
}

export interface IToken {
  access: string;
  refresh: string;
}

export function createUser(data: any): IUser {
  return {
    id: data.id,
    username: data.username,
    first_name: data.first_name,
    last_name: data.last_name,
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private static parseUserFromAccessToken(accessToken: string): IUser {
    const [, payload] = accessToken.split('.');
    const decoded = window.atob(payload);
    return JSON.parse(decoded);
  }

  static getUser(): IUser {
    const accessToken = this.getAccessToken();
    if (accessToken) {
      return this.parseUserFromAccessToken(accessToken);
    }
    return undefined;
  }

  static getAccessToken(): string {
    const token = JSON.parse(window.localStorage.getItem('rideshare.auth'));
    if (token) {
      return token.access;
    }
    return undefined;
  }

  signUp(
    username: string,
    firstName: string,
    lastName: string,
    password: string
  ): Observable<IUser> {
    const url = '/api/users/sign_up/';

    const formData = new FormData();

    formData.append('username', username);
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('password1', password);
    formData.append('password2', password);

    return this.http.request<IUser>('POST', url, { body: formData });
  }

  logIn(username: string, password: string): Observable<IToken> {
    const url = '/api/users/log_in/';
    return this.http
      .post<IToken>(url, { username, password })
      .pipe(
        tap((token) =>
          localStorage.setItem('rideshare.auth', JSON.stringify(token))
        )
      );
  }

  logOut(): void {
    localStorage.removeItem('rideshare.auth');
  }
}
