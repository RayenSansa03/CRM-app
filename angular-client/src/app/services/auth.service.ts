import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  signup(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user);
  }
}
