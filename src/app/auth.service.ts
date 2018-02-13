import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  login(user: string, password: string): boolean {
    if (user === 'user' && password === 'password') {
      localStorage.setItem('USN', user);
      return true;
    }
    return false;
  }

  logout(): any {
    localStorage.removeItem('USN');
  }

  getUser(): any {
    return localStorage.getItem('USN');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
