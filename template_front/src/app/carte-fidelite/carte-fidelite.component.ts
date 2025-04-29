import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carte-fidelite',
  templateUrl: './carte-fidelite.component.html',
  styleUrls: ['./carte-fidelite.component.css'],
})
export class CarteFideliteComponent {
  currentStep: number = 1;

  salleForm: FormGroup;
  selectedFile: File | null = null;
  etatOptions: any[] = [
    { label: 'Disponible', value: 'Disponible' },
    { label: 'Occupé', value: 'Occupé' },
    { label: 'Maintenance', value: 'Maintenance' },
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.salleForm = this.fb.group({
      nom: ['', Validators.required],
      prixParJour: ['', Validators.required],
      capaciteMaximale: ['', Validators.required],
      etat: ['', Validators.required],
      description: ['', Validators.required], // Ajout de description
    });
  }

  onFileSelected(event: any) {
    if (event && event.files && event.files.length > 0) {
      this.selectedFile = event.files[0];  // Récupère le fichier sélectionné
      console.log("Fichier sélectionné:", this.selectedFile);
    } else {
      console.error('Aucun fichier sélectionné');
    }
  }
  

  nextStep() {
    this.currentStep++;
    this.updateStepProgress();
  }

  previousStep() {
    this.currentStep--;
    this.updateStepProgress();
  }

  updateStepProgress() {
    const steps = document.querySelectorAll('.step');
    const fields = ['nom', 'prixParJour', 'capaciteMaximale', 'etat', 'description'];
    let filledFields = 0;

    fields.forEach(field => {
      if (this.salleForm.get(field)?.value) {
        filledFields++;
      }
    });

    this.currentStep = filledFields;

    steps.forEach((step, index) => {
      if (index < this.currentStep) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });
  }

  onSubmit() {
    if (this.salleForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('nom', this.salleForm.get('nom')?.value);
      formData.append('prixParJour', this.salleForm.get('prixParJour')?.value);
      formData.append('capaciteMaximale', this.salleForm.get('capaciteMaximale')?.value);
      formData.append('etat', this.salleForm.get('etat')?.value);
      formData.append('description', this.salleForm.get('description')?.value);
      formData.append('image', this.selectedFile); // Assurez-vous que l'image est bien ajoutée
  
      this.http.post('http://localhost:3000/api/salles', formData).subscribe(
        response => console.log('Salle créée avec succès', response),
        error => console.error('Erreur lors de la création de la salle', error)
      );
    } else {
      console.error('Formulaire invalide ou fichier non sélectionné');
    }
  }
}
