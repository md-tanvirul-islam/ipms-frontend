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

  addressIndex() {
    return this.http.get(`${this.baseUrl}/addresses`)
  }

  addressStore(data : {}) {
    return this.http.post(`${this.baseUrl}/addresses`, data)
  }

  addressFind(id: number) {
    return this.http.get(`${this.baseUrl}/addresses/${id}`)
  }

  addressUpdate(data : {}) {
    return this.http.put(`${this.baseUrl}/addresses`, data)
  }

  auditIndex() {
    return this.http.get(`${this.baseUrl}/audits`)
  }
}
