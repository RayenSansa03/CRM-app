import { Component } from '@angular/core';
import { ProspectService } from 'src/app/service/prospect.service';
import { Prospect } from 'src/app/models/prospect.model';



@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  prospects: any[] = [];

  prospect = { name: '', email: '', tags: [] };

  ngOnInit() {
    // Ajouter un exemple de prospect par défaut
    this.prospects.push({
      name: 'John Doe',
      email: 'johndoe@example.com',
      tags: ['Marketing', 'SEO', 'Développement']
    });
  }

  onSubmit() {
    if (this.prospect.name && this.prospect.email && this.prospect.tags.length > 0) {
      this.prospects.push({ ...this.prospect });
      this.prospect = { name: '', email: '', tags: [] }; // Réinitialiser le formulaire
    }
  }
}