import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.css']
})
export class VentesComponent {
  projectForm: FormGroup;

  constructor(private fb: FormBuilder, private projectService: ProjectService) {
    this.projectForm = this.fb.group({
      nom: ['', Validators.required],
      client: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      sujet: ['', Validators.required],
      budget: ['', Validators.required],
      etatProjet: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      this.projectService.addProject(this.projectForm.value).subscribe({
        next: (response) => {
          console.log('Projet ajouté avec succès:', response);
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout du projet:', error);
        }
      });
    } else {
      console.error('Formulaire invalide');
    }
  }
}
