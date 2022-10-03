import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private behaviorSubject =  new BehaviorSubject < boolean > (this.tokenService.loggedIn())
  authStatus = this.behaviorSubject.asObservable();

  constructor(private tokenService: TokenService) { }

  changeAuthStatus(value: boolean) {
    this.behaviorSubject.next(value);
  }
}
