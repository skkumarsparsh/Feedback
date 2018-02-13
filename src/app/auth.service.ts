import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  login(usn: string,semester: string,section: string): boolean {
    if (usn.length === 10) {
      localStorage.setItem('USN', usn);
      localStorage.setItem('Semester', semester);
      localStorage.setItem('Section', section);
      return true;
    }
    return false;
  }

  logout(): any {
    localStorage.removeItem('USN');
    localStorage.removeItem('Semester');
    localStorage.removeItem('Section');
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
