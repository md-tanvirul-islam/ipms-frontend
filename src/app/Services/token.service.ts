import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login : 'http://127.0.0.1:8000/api/login',
    registration : 'http://127.0.0.1:8000/api/registration'
  };

  constructor() { }

  handle(token : string) {
    this.set(token);
    // console.log(this.isValid());
  }

  set(token : string) {
    return localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    return localStorage.removeItem('token');
  }

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
    }
    return false;
  }

  payload(token: string) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload: string) {
    return JSON.parse(atob(payload))
  }

  loggedIn() {
    return this.isValid();
  }
}
