
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiUrl = 'http://localhost:3000'; // Remplacez cela par l'URL de votre API Node.js

  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get(`${this.apiUrl}/categories`);
  }

  getCategoriesById(id: number) {
    return this.http.get(`${this.apiUrl}/categories/${id}`);
  }

 


}



