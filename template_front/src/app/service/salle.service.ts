import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Salle {
  _id: string;
  prixParJour: number;
  capaciteMaximale: number;
  etat: string;
}

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  private apiUrl = 'http://localhost:3000/api/salles';

  constructor(private http: HttpClient) { }

  getSalles(): Observable<Salle[]> {
    return this.http.get<Salle[]>(this.apiUrl);
  }

  getSalle(id: string): Observable<Salle> {
    return this.http.get<Salle>(`${this.apiUrl}/${id}`);
  }

  createSalle(salle: Salle): Observable<Salle> {
    return this.http.post<Salle>(this.apiUrl, salle);
  }

  updateSalle(id: string, salle: Salle): Observable<Salle> {
    return this.http.put<Salle>(`${this.apiUrl}/${id}`, salle);
  }

  deleteSalle(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
