import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mes-mouvements',
  templateUrl: './mes-mouvements.component.html',
  styleUrls: ['./mes-mouvements.component.css']
})
export class MesMouvementsComponent {
  urgenceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialiser le formulaire avec les champs requis
    this.urgenceForm = this.fb.group({
      nomLivraison: ['', Validators.required],
      dateLivraison: ['', Validators.required],
      adresse: ['', Validators.required],
      details: ['', Validators.required]
    });
  }

  // Fonction appelée lors de la soumission du formulaire
  onSubmit() {
    if (this.urgenceForm.valid) {
      const urgenceData = this.urgenceForm.value;
      console.log('Détails de la livraison urgente:', urgenceData);

      // Vous pouvez envoyer les données du formulaire au backend ici
    } else {
      console.log('Le formulaire est invalide.');
    }
  }
}
