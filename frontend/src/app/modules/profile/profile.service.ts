import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url = "http://localhost:8000/api/user";

  constructor(private http: HttpClient) { }

  postUser(payload: any) {
    return this.http.post(`${this.url}/register`, payload);
  }

  postLoginUser(payload: any) {
    return this.http.post(`${this.url}/login`, payload);
  }
}
