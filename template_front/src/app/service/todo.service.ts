import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ListeToDo {
  idL: string;
  description: string;
  etat: string;
  dateCreation: Date;
  idP: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private apiUrl = 'https://localhost:7026/api/ListeToDo';

  constructor(private http: HttpClient) {}

  getListeToDos(): Observable<ListeToDo[]> {
    return this.http.get<ListeToDo[]>(this.apiUrl);
  }

  getListeToDo(id: string): Observable<ListeToDo> {
    return this.http.get<ListeToDo>(`${this.apiUrl}/${id}`);
  }

  addListeToDo(listeToDo: ListeToDo): Observable<ListeToDo> {
    return this.http.post<ListeToDo>(this.apiUrl, listeToDo);
  }

  updateListeToDo(id: string, listeToDo: ListeToDo): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, listeToDo);
  }

  deleteListeToDo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
