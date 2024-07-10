import { Component } from '@angular/core';
import { AuthService } from '../app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user: any = {
    cin: '',
    nom: '',
    prenom: '',
    dateNaissance: '',
    poste: '',
    adresseMail: '',
    salaire: '',
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    this.authService.signup(this.user).subscribe(
      (response: any) => {
        // Ajout du type 'any' pour le paramètre 'response'
        console.log('Inscription réussie', response);
        this.router.navigate(['/login']);
      },
      (error: any) => {
        // Ajout du type 'any' pour le paramètre 'error'
        console.error("Erreur lors de l'inscription", error);
      }
    );
  }
}
