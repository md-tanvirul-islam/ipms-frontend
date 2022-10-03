import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCommunicationService {
  private baseUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  login(data : {}) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  registration(data : {}) {
    return this.http.post(`${this.baseUrl}/registration`, data)
  }
}
