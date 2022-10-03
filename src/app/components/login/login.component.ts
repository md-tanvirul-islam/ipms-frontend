import { Component, OnInit } from '@angular/core';
import { ApiCommunicationService } from 'src/app/Services/api-communication.service';

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

  constructor(private apiCommunication: ApiCommunicationService) {}

  ngOnInit(): void {}

  onSubmit() {
    return this.apiCommunication.login(this.form)
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          this.error = error.error.error
        },
      });
  }
}
