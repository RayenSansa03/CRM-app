import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {
  equipmentForm: FormGroup;
  items: any[] = [];
  activeIndex: number = 0;
  etats: any[] = [];

  constructor(private fb: FormBuilder) {
    this.equipmentForm = this.fb.group({
      designation: ['', Validators.required],
      cout: [0, Validators.required],
      categorie: ['', Validators.required],
      description: ['', Validators.required],
      etat: ['', Validators.required],
      prixParJour: [0, Validators.required],
    });
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Détails de l\'équipement' },
      { label: 'Étape 2' },
      { label: 'Étape 3' },
      // Ajoutez plus d'étapes si nécessaire
    ];

    this.etats = [
      { label: 'Neuf', value: 'Neuf' },
      { label: 'Utilisé', value: 'Utilisé' },
      { label: 'Réparé', value: 'Réparé' },
    ];
  }

  nextStep(): void {
    if (this.activeIndex < this.items.length - 1) {
      this.activeIndex++;
    }
  }

  previousStep(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }

  onSubmit(): void {
    if (this.equipmentForm.valid) {
      console.log(this.equipmentForm.value);
      // Logique pour soumettre le formulaire
    }
  }
}
