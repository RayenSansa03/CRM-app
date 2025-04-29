import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from './personne.model';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  private apiUrl = 'https://localhost:7026/api/Personne';

  constructor(private http: HttpClient) {}

  getPersonnes(): Observable<Personne[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<Personne[]>(this.apiUrl, { headers });
  }
}
