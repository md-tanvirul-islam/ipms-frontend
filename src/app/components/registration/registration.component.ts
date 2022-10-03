import { Component, OnInit } from '@angular/core';
import { ApiCommunicationService } from 'src/app/Services/api-communication.service';

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

  constructor(private apiCommunication: ApiCommunicationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    return
      this.apiCommunication.registration(this.form).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          this.errors = error.error.errors;
        },
      });
  }

}
