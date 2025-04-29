// rapport.component.ts
import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../service/personne.service';
import { TeamService } from '../service/team.service'; 
import { Personne } from '../service/personne.model';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css'],
})
export class RapportComponent implements OnInit {
  personnes: Personne[] = [];
  team: any = { nom: '', description: '', members: [] }; 

  constructor(private personneService: PersonneService, private teamService: TeamService) {}

  ngOnInit(): void {
    this.personneService.getPersonnes().subscribe((res) => {
      this.personnes = res as Personne[];
    });
  }

  addMember(): void {
    this.team.members.push('');
  }

  removeMember(index: number): void {
    this.team.members.splice(index, 1);
  }

  onSubmit(): void {
    const teamWithMembers = {
      ...this.team,
      members: this.team.members.map((member: Personne) => member.id)
    };

    this.teamService.createTeam(teamWithMembers).subscribe(
      (response) => {
        console.log('Équipe ajoutée avec succès', response);
        this.team = { nom: '', description: '', members: [] };
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'équipe', error);
      }
    );
  }
}
