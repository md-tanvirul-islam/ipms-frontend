import { Component, OnInit } from '@angular/core';
import { ApiCommunicationService } from 'src/app/Services/api-communication.service';
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
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {}

  onSubmit() {
    return this.apiCommunicationService.login(this.form)
      .subscribe({
        next: (response : any) => {
          this.tokenService.handle(response.access_token);
        },
        error: (response : any) => {
          this.error = response.error.error
        },
      });
  }
}
