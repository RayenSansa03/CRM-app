import { Component, OnInit } from '@angular/core';
import { SalleService } from '../service/salle.service';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrls: ['./livraisons.component.css']
})
export class LivraisonsComponent implements OnInit {
  salles: any[] = [];

  constructor(private salleService: SalleService) { }

  ngOnInit(): void {
    this.salleService.getSalles().subscribe(
      (data) => {
        this.salles = data;
        this.salles.forEach(salle => {
          console.log('Image URL:', 'http://localhost:3000/' + salle.image);
        });
      },
      (error) => {
        console.error('Erreur lors de la récupération des salles:', error);
      }
    );
  }
}
