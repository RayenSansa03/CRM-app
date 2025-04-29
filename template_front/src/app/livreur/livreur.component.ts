import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions } from '@fullcalendar/core';

declare var google: any;

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent implements OnInit {
  private CLIENT_ID = '465947793103-0e6ifpb02tcrmfvqch2pkr5j396a88gp.apps.googleusercontent.com';
  private API_KEY = 'AIzaSyA87BBjmqzWcrxMZk1O7JBvOfyCL1AxVRo';
  private SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

  currentYear: number = new Date().getFullYear();
  events: any[] = [];

  calendarOptions: CalendarOptions = {};

  constructor() { }

  ngOnInit() {
    this.loadGoogleIdentityServices();
    this.initializeCalendar();
  }

  loadGoogleIdentityServices() {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      google.accounts.id.initialize({
        client_id: this.CLIENT_ID,
        callback: this.handleCredentialResponse.bind(this)
      });
    };
  }

  initGoogleAuth() {
    google.accounts.oauth2.initTokenClient({
      client_id: this.CLIENT_ID,
      scope: this.SCOPES,
      callback: (tokenResponse: any) => {
        if (tokenResponse && tokenResponse.access_token) {
          this.loadEvents(tokenResponse.access_token);
        }
      },
    }).requestAccessToken();
  }

  handleCredentialResponse(response: any) {
    console.log("Encoded JWT ID token: " + response.credential);
  }

  loadEvents(accessToken: string) {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${accessToken}`);

    fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${this.API_KEY}&singleEvents=true&orderBy=startTime`, {
      method: 'GET',
      headers: headers
    })
    .then(response => response.json())
    .then(data => {
      this.events = data.items.map((event: any) => ({
        title: event.summary,
        start: event.start.dateTime || event.start.date,
        end: event.end.dateTime || event.end.date
      }));
      this.calendarOptions.events = this.events;
    })
    .catch(error => {
      console.error('Erreur lors du chargement des événements:', error);
    });
  }

  initializeCalendar() {
    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      events: this.events,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true,
      selectable: true,
      eventClick: this.handleEventClick.bind(this),
    };
  }

  handleEventClick(info: any) {
    alert('Event: ' + info.event.title);
    // Ajoutez votre logique pour interagir avec l'événement
  }
}