import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as L from 'leaflet';
import { catchError, debounceTime, distinctUntilChanged, map, of, switchMap } from 'rxjs';

interface Coordinates {
  lon: number;
  lat: number;
}

interface AutocompleteResult {
  display_name: string;
  lat: string;
  lon: string;
}

@Component({
  selector: 'app-mes-depots',
  templateUrl: './mes-depots.component.html',
  styleUrls: ['./mes-depots.component.css'],
})
export class MesDepotsComponent implements AfterViewInit {
  livraisonForm: FormGroup;
  vehicules: string[] = ['Camion', 'Fourgon', 'Moto'];
  map: L.Map | undefined;
  apiKey = '5b3ce3597851110001cf6248bc04319c30204fad94fde1b80a68aa6e';
  departSuggestions: AutocompleteResult[] = [];
  destinationSuggestions: AutocompleteResult[] = [];

  @ViewChild('lieuDepartInput') lieuDepartInput!: ElementRef<HTMLInputElement>;
  @ViewChild('destinationInput') destinationInput!: ElementRef<HTMLInputElement>;
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef<HTMLElement>;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.livraisonForm = this.fb.group({
      lieuDepart: ['', Validators.required],
      destination: ['', Validators.required],
      vehicule: ['', Validators.required],
      dateDepart: ['', Validators.required],
    });

    this.setupAutocomplete();
  }

  ngAfterViewInit() {
    this.initMap();
  }

  setupAutocomplete() {
    this.livraisonForm.get('lieuDepart')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => this.getSuggestions(value))
    ).subscribe(suggestions => {
      this.departSuggestions = suggestions;
    });

    this.livraisonForm.get('destination')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => this.getSuggestions(value))
    ).subscribe(suggestions => {
      this.destinationSuggestions = suggestions;
    });
  }

  getSuggestions(query: string) {
    if (query.length < 3) {
      return of([]);
    }
    return this.http.get<AutocompleteResult[]>(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`).pipe(
      map(response => response.slice(0, 5)),
      catchError(() => of([]))
    );
  }

  selectSuggestion(suggestion: AutocompleteResult, field: 'lieuDepart' | 'destination') {
    this.livraisonForm.get(field)?.setValue(suggestion.display_name);
    if (field === 'lieuDepart') {
      this.departSuggestions = [];
    } else {
      this.destinationSuggestions = [];
    }
  }

  initMap() {
    this.map = L.map(this.mapContainer.nativeElement).setView([48.8566, 2.3522], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    this.lieuDepartInput.nativeElement.addEventListener('change', () => this.calculateAndDisplayRoute());
    this.destinationInput.nativeElement.addEventListener('change', () => this.calculateAndDisplayRoute());
  }

  calculateAndDisplayRoute() {
    const start = this.livraisonForm.get('lieuDepart')?.value;
    const end = this.livraisonForm.get('destination')?.value;

    console.log('Calcul de l\'itinéraire pour:', start, 'à', end);

    this.geocodeAddress(start).pipe(
      switchMap(startCoords => {
        console.log('Coordonnées de départ:', startCoords);
        return this.geocodeAddress(end).pipe(
          map(endCoords => {
            console.log('Coordonnées de destination:', endCoords);
            return { startCoords, endCoords };
          })
        );
      }),
      switchMap(data => {
        if (!data || !data.startCoords || !data.endCoords) {
          throw new Error('Erreur lors du géocodage des adresses.');
        }

        const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${this.apiKey}&start=${data.startCoords.lon},${data.startCoords.lat}&end=${data.endCoords.lon},${data.endCoords.lat}`;
        console.log('URL de l\'API:', url);

        return this.http.get<any>(url).pipe(
          catchError((error: HttpErrorResponse) => {
            console.error('Erreur lors de l\'appel à l\'API OpenRouteService:', error);
            if (error.error instanceof ErrorEvent) {
              console.error('Erreur côté client:', error.error.message);
            } else {
              console.error(`Erreur côté serveur: ${error.status}, body:`, error.error);
            }
            throw new Error(`Erreur lors du calcul de l'itinéraire: ${error.message}`);
          })
        );
      }),
      catchError(error => {
        console.error('Erreur globale:', error);
        alert(error.message);
        return of(null);
      })
    ).subscribe((response: any) => {
      console.log('Réponse complète de l\'API:', JSON.stringify(response, null, 2));

      if (response && response.features && response.features.length > 0) {
        console.log('Premier itinéraire:', response.features[0]);
        if (response.features[0].geometry) {
          console.log('Géométrie de la route:', response.features[0].geometry);
          const route = response.features[0].geometry.coordinates;
          const latlngs = route.map((coord: [number, number]) => [coord[1], coord[0]]);

          this.map?.eachLayer(layer => {
            if (layer instanceof L.Polyline) {
              this.map?.removeLayer(layer);
            }
          });

          if (this.map) {
            L.polyline(latlngs, { color: 'red' }).addTo(this.map);
            this.map?.fitBounds(latlngs);
          }
        } else {
          console.error('La géométrie de la route est manquante');
          alert('Erreur : La géométrie de l\'itinéraire est manquante.');
        }
      } else {
        console.error('Aucune route trouvée dans la réponse');
        alert('Aucun itinéraire trouvé. Veuillez vérifier les adresses entrées.');
      }
    });
  }

  geocodeAddress(address: string) {
    console.log('Géocodage de l\'adresse:', address);
    return this.http.get<any>(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`).pipe(
      map(response => {
        console.log('Réponse du géocodage pour', address, ':', response);
        if (response && response[0]) {
          const lon = parseFloat(response[0].lon);
          const lat = parseFloat(response[0].lat);
          console.log('Coordonnées obtenues:', lon, lat);
          return { lon, lat };
        } else {
          throw new Error(`Adresse non trouvée: ${address}`);
        }
      }),
      catchError(error => {
        console.error('Erreur lors du géocodage de l\'adresse:', error);
        throw error;
      })
    );
  }

  onSubmit() {
    if (this.livraisonForm.valid) {
      const livraisonData = this.livraisonForm.value;
      console.log('Données de la livraison:', livraisonData);
      this.calculateAndDisplayRoute();
    } else {
      console.error('Formulaire non valide');
    }
  }
}
