import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCommunicationService } from 'src/app/Services/api-communication.service';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  };

  public errors : {name: string, email: string, password: string} = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private apiCommunicationService: ApiCommunicationService,
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    return this.apiCommunicationService.registration(this.form).subscribe({
        next: (response : any) => {
        this.tokenService.handle(response.access_token);
        this.authService.changeAuthStatus(true);
        this.router.navigateByUrl('/profile')
        },
        error: (response : any) => {
          this.errors = response.error.errors;
        },
      });
  }

}
