export class Personne {
  id: number = 0; // Add initializer for 'id' property
  nom: string = ''; // Add initializer for 'nom' property
  email: string = ''; // Add initializer for 'email' property
  role: string;

  constructor() {
    this.role = '';
  }
}
