import { Component, OnInit } from '@angular/core';
import { CronofyService } from '../service/cronofy.service';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-point-de-vente',
  templateUrl: './point-de-vente.component.html',
  styleUrls: ['./point-de-vente.component.css']
})
export class PointDeVenteComponent implements OnInit {
  events: any[] = [];
  accessToken: string | null = null;
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    events: []
  };

  constructor(private cronofyService: CronofyService) {}

  ngOnInit() {
    this.checkCronofyAuth();
  }

  // Vérifier si l'utilisateur est authentifié avec Cronofy
  checkCronofyAuth() {
    this.accessToken = localStorage.getItem('cronofy_access_token');
    if (this.accessToken) {
      // Si le token est disponible, récupérer les événements
      this.getEvents();
    }
  }

  // Lancer l'authentification avec Cronofy
  loginWithCronofy() {
    const authUrl = this.cronofyService.getAuthUrl();
    window.location.href = authUrl; // Redirection vers l'URL d'authentification Cronofy
  }

  // Récupérer les événements depuis Cronofy
  getEvents() {
    if (this.accessToken) {
      this.cronofyService.getEvents(this.accessToken).then(eventsData => {
        this.events = eventsData.events;
        this.updateCalendarEvents(); // Mettre à jour les événements du calendrier
      }).catch(err => {
        console.error('Erreur lors de la récupération des événements:', err);
        // En cas d'erreur, retirer le token du localStorage et réinitialiser l'état
        localStorage.removeItem('cronofy_access_token');
        this.accessToken = null;
      });
    }
  }

  // Mettre à jour les événements dans FullCalendar
  updateCalendarEvents() {
    this.calendarOptions.events = this.events.map(event => ({
      title: event.summary,
      start: event.start,
      end: event.end
    }));
  }

  // Rafraîchir manuellement les événements en appelant à nouveau l'API Cronofy
  refreshEvents() {
    this.getEvents();
  }
}
