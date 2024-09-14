import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;

  login(adminstratorCode: string) {
    this.isLoggedIn = adminstratorCode === 'Mahesh@05';
  }

  logout() {
    this.isLoggedIn = false;
  }
  constructor() {}
}