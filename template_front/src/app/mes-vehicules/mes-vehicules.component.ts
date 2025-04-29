import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mes-vehicules',
  templateUrl: './mes-vehicules.component.html',
  styleUrls: ['./mes-vehicules.component.css']
})
export class MesVehiculesComponent {
  teamForm: FormGroup;
  activeStep = 0;
  steps = [
    { label: 'Employés' },
    { label: 'Clients' },
    { label: 'Projets' }
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.teamForm = this.fb.group({
      employeeNames: [[]],  // Contrôle pour les noms des employés
      clientNames: [[]],    // Contrôle pour les noms des clients
      projectNames: [[]]    // Contrôle pour les noms des projets
    });
  }

  nextStep() {
    if (this.activeStep < this.steps.length - 1) {
      this.activeStep++;
    }
  }

  previousStep() {
    if (this.activeStep > 0) {
      this.activeStep--;
    }
  }

  onSubmit() {
    if (this.teamForm.valid) {
      console.log('Form is valid, preparing to send data');
      const formData = new FormData();
      formData.append('employeeNames', JSON.stringify(this.teamForm.get('employeeNames')?.value));
      formData.append('clientNames', JSON.stringify(this.teamForm.get('clientNames')?.value));
      formData.append('projectNames', JSON.stringify(this.teamForm.get('projectNames')?.value));

      this.http.post('http://localhost:3000/api/teams', formData).subscribe(
        response => {
          console.log('Données ajoutées avec succès', response);
        },
        error => {
          console.error('Erreur lors de l\'ajout des données', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
