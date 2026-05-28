
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Interface Staff (même model que le backend)
interface Staff {
experience: any;
  id:           number;
  nom:          string;
  prenom:       string;
  genre:        string;
  email:        string;
  telephone:    string;
  designation?: string;
  qualification?: string;
  rating:       number;
  photo?:       string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  // Données (sera remplacé par staffService.getAllStaffs())
  staffs: Staff[] = [
    {
      id: 1, nom: 'Rufin', prenom: 'Dr. Jean', genre: 'Masculin', email: 'jean@mbemnova.com', telephone: '697000001', designation: 'Gynecologist', qualification: '8 années expérience', rating: 5,
      experience:5 
    },
    {
      id: 2, nom: 'Padal', prenom: 'Marie', genre: 'Féminin', email: 'marie@mbemnova.com', telephone: '697000002', designation: 'Gynecologist', qualification: '8 années expérience', rating: 5,
      experience: 6
    },
    {
      id: 3, nom: 'Bello', prenom: 'Paul', genre: 'Masculin', email: 'paul@mbemnova.com', telephone: '697000003', designation: 'Gynecologist', qualification: '8 années expérience', rating: 4,
      experience: 3
    },
    {
      id: 4, nom: 'Nguema', prenom: 'Sophie', genre: 'Féminin', email: 'sophie@mbemnova.com', telephone: '697000004', designation: 'Gynecologist', qualification: '8 années expérience', rating: 5,
      experience: 3
    },
    {
      id: 5, nom: 'Mvondo', prenom: 'Dr. Alain', genre: 'Masculin', email: 'alain@mbemnova.com', telephone: '697000005', designation: 'Cardiologue', qualification: '5 années expérience', rating: 3,
      experience: 3
    },
    {
      id: 6, nom: 'Manga', prenom: 'Claire', genre: 'Féminin', email: 'claire@mbemnova.com', telephone: '697000006', designation: 'Gynecologist', qualification: '8 années expérience', rating: 5,
      experience: 4
    },
    {
      id: 7, nom: 'Zang', prenom: 'Eric', genre: 'Masculin', email: 'eric@mbemnova.com', telephone: '697000007', designation: 'Pédiatre', qualification: '3 années expérience', rating: 4,
      experience: 4
    },
    {
      id: 8, nom: 'Ewane', prenom: 'Dr. Anna', genre: 'Féminin', email: 'anna@mbemnova.com', telephone: '697000008', designation: 'Gynecologist', qualification: '8 années expérience', rating: 5,
      experience: 8
    },
  ];

  filteredStaffs: Staff[] = [];
  viewMode: 'card' | 'list' = 'card';
  searchTerm = '';

  ngOnInit(): void {
    // Initialiser la liste filtrée avec toutes les données
    this.filteredStaffs = [...this.staffs];

 
  }

  // Recherche en temps réel
  onSearch(): void {
    if (!this.searchTerm.trim()) {
      this.filteredStaffs = [...this.staffs];
      return;
    }
    const kw = this.searchTerm.toLowerCase();
    this.filteredStaffs = this.staffs.filter(s =>
      `${s.nom} ${s.prenom} ${s.designation} ${s.email}`.toLowerCase().includes(kw)
    );
  }

  // Supprimer un staff
  deleteStaff(id: number): void {
    if (!confirm('Confirmer la suppression de ce staff ?')) return;

    // Supprimer localement (remplace par staffService.deleteStaff(id) plus tard)
    this.staffs         = this.staffs.filter(s => s.id !== id);
    this.filteredStaffs = this.filteredStaffs.filter(s => s.id !== id);
  }

  // Générer le tableau des étoiles [1,1,1,0,0] pour 3/5
  getStars(rating: number = 5): number[] {
    return Array.from({ length: 5 }, (_, i) => i < rating ? 1 : 0);
  }
}