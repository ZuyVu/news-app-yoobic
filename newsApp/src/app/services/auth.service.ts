import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authorised: boolean; // true if user is authorised
  constructor() {
    this.authorised = false;
  }

  get authStatus() {
    return this.authorised;
  }

  login() {
    this.authorised = true;
  }

  logout() {
    this.authorised = false;
  }

}
