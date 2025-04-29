import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-credits',
  templateUrl: './mes-credits.component.html',
  styleUrls: ['./mes-credits.component.css']
})
export class MesCreditsComponent implements OnInit {
  opportunities: any[] = [];
  opportunity = { name: '', value: 0, stage: '', nextAction: '' };

  // Liste d'étapes possibles pour une opportunité
  stages = [
    { label: 'Découverte', value: 'Découverte' },
    { label: 'Qualification', value: 'Qualification' },
    { label: 'Négociation', value: 'Négociation' },
    { label: 'Clôture', value: 'Clôture' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Ajouter un exemple d'opportunité statique
    this.opportunities.push({
      name: 'Opportunité Exemple',
      value: 10000,
      stage: 'Qualification',
      nextAction: 'Suivre le client'
    });
  }

  // Méthode pour soumettre le formulaire et ajouter une opportunité
  onSubmit() {
    if (this.opportunity.name && this.opportunity.value && this.opportunity.stage && this.opportunity.nextAction) {
      this.opportunities.push({ ...this.opportunity });
      this.opportunity = { name: '', value: 0, stage: '', nextAction: '' }; // Réinitialiser le formulaire
    }
  }
}
