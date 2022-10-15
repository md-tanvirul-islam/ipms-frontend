import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCommunicationService } from 'src/app/Services/api-communication.service';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null,
  };

  public error = null;

  constructor(
    private apiCommunicationService: ApiCommunicationService,
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {}

  onSubmit() {
    return this.apiCommunicationService.login(this.form)
      .subscribe({
        next: (response : any) => {
          this.tokenService.handle(response.access_token);
          this.authService.changeAuthStatus(true);
          this.router.navigateByUrl('/address/index')
        },
        error: (response : any) => {
          this.error = response.error.error
        },
      });
  }
}
