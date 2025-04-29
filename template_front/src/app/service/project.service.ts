import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Project {
  nom: string;
  client: string; // Cela représentera l'ID du client
  dateDebut: Date;
  dateFin: Date;
  sujet: string;
  budget: number;
  etatProjet: string;
}

interface Client {
  _id: string;
  nom: string;
  prenom: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:3000/api/projects'; // Assurez-vous que cette URL correspond à votre API
  private clientApiUrl = 'http://localhost:3000/api/clients'; // Endpoint pour les clients

  constructor(private http: HttpClient) {}

  // Méthode pour ajouter un projet
  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }

  // Méthode pour récupérer les clients pour l'autocomplétion
  getClients(query: string): Observable<Client[]> {
    const params = new HttpParams().set('query', query);
    return this.http.get<Client[]>(`${this.clientApiUrl}/autocomplete`, { params });
  }
}
