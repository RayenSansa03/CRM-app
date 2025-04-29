import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventaire',
  templateUrl: './inventaire.component.html',
  styleUrls: ['./inventaire.component.css']
})
export class InventaireComponent {
  panneForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialisation du formulaire de panne
    this.panneForm = this.fb.group({
      causePanne: ['', Validators.required],
      lieuPanne: ['', Validators.required],
      datePanne: ['', Validators.required],
      heurePanne: ['', Validators.required]
    });
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    if (this.panneForm.valid) {
      const panneData = this.panneForm.value;
      console.log('Détails de la panne signalée:', panneData);

      // Logique pour envoyer les données au backend
    } else {
      console.log('Le formulaire est invalide.');
    }
  }
}
