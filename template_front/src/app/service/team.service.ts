import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'http://localhost:3000/api/teams'; // URL de votre API

  constructor(private http: HttpClient) {}

  createTeam(team: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, team);
  }
}
