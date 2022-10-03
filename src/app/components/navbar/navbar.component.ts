import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.authService.authStatus.subscribe(value => this.loggedIn = value)
  }

  logOut(event: MouseEvent) {
    event.preventDefault();
    this.tokenService.remove();
    this.authService.changeAuthStatus(true);
    this.router.navigateByUrl('/login')
  }

}
