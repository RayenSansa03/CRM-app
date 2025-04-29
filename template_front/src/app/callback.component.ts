import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gapi } from 'gapi-script';

@Component({
  selector: 'app-callback',
  template: `<p>Connexion en cours...</p>`,
})
export class CallbackComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.handleAuthCallback();
  }

  handleAuthCallback() {
    if (gapi.auth2) {
      const authInstance = gapi.auth2.getAuthInstance();

      if (authInstance) {
        authInstance.isSignedIn.listen((isSignedIn: boolean) => {
          if (isSignedIn) {
            this.router.navigate(['/dashboard']);  // Modifier pour correspondre à ta route principale
          } else {
            console.error('Connexion échouée');
          }
        });

        if (authInstance.isSignedIn.get()) {
          this.router.navigate(['/dashboard']);
        } else {
          console.error('Utilisateur non connecté');
        }
      } else {
        console.error('gapi non initialisé');
      }
    } else {
      console.error('gapi non chargé');
    }
  }
}
