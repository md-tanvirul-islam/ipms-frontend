import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit() {
    return this.http
      .post('http://127.0.0.1:8000/api/login', this.form)
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
}
