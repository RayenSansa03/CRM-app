import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prospect } from '../models/prospect.model';

@Injectable({
  providedIn: 'root'
})
export class ProspectService {
  private apiUrl = 'http://localhost:3000/api/prospects';

  constructor(private http: HttpClient) {}

  getProspects(): Observable<Prospect[]> {
    return this.http.get<Prospect[]>(this.apiUrl);
  }

  addProspect(prospect: Prospect): Observable<Prospect> {
    return this.http.post<Prospect>(this.apiUrl, prospect);
  }
}
