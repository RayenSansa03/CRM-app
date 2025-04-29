// task.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl = 'http://localhost:3000/api/tasks';

  constructor(private http: HttpClient) {}

  getTasks(projectId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/${projectId}`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task);
  }

  updateTask(taskId: string, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/${taskId}`, task);
  }

  deleteTask(taskId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${taskId}`);
  }
}
