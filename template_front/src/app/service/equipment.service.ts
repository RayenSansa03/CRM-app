import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipment } from '../models/equipment.model';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  constructor(private http: HttpClient) {}

  createEquipment(equipment: Equipment) {
    return this.http.post('http://localhost:3000/api/equipments', equipment);
  }
}
