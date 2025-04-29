import { Component } from '@angular/core';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css']
})
export class PipelineComponent {
  opportunities = [
    { name: 'Opportunité 1', value: 1000, stage: 'Découverte', nextAction: 'Contacter le client' },
    { name: 'Opportunité 2', value: 2000, stage: 'Négociation', nextAction: 'Préparer l’offre' },
    // Ajoutez d'autres opportunités ici
  ];

  editOpportunity(opportunity: any) {
    // Logique pour modifier l'opportunité
  }

  deleteOpportunity(opportunity: any) {
    this.opportunities = this.opportunities.filter(op => op !== opportunity);
  }

  openAddOpportunityDialog() {
    // Logique pour ouvrir un dialog d'ajout d'opportunité
  }
}
