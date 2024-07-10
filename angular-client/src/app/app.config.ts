import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router'; // Importez Routes depuis '@angular/router'

import { routes } from './app.routes'; // Assurez-vous que routes est correctement importé depuis './app.routes'

import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes as Routes), // Utilisez routes comme Routes
    provideClientHydration()
  ]
};
