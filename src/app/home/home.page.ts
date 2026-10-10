import { Component } from '@angular/core';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonButton,
  IonSearchbar
} from '@ionic/angular';

interface Student {
  id: number;
  name: string;
  gender: string;
  course: string;
  year: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonButton,
    IonSearchbar
  ]
})
export class HomePage {
  students: Student[] = [
    { id: 1, name: 'Juan Dela Cruz', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 2, name: 'Maria Santos', gender: 'Female', course: 'BS Information Technology', year: 3 },
    { id: 3, name: 'Carlos Reyes', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 4, name: 'Angela Garcia', gender: 'Female', course: 'BS Information Technology', year: 3 },
    { id: 5, name: 'Mark Villanueva', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 6, name: 'Sofia Mendoza', gender: 'Female', course: 'BS Information Technology', year: 3 },
    { id: 7, name: 'Daniel Bautista', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 8, name: 'Beatrice Navarro', gender: 'Female', course: 'BS Information Technology', year: 3 }
  ];

  searchTerm = '';
  selectedGender = 'All';
  highlightedId: number | null = null;

  get filteredStudents(): Student[] {
    return this.students.filter(student => {
      const search = this.searchTerm.toLowerCase();

      const matchesSearch =
        student.name.toLowerCase().includes(search) ||
        student.course.toLowerCase().includes(search);

      const matchesGender =
        this.selectedGender === 'All' ||
        student.gender === this.selectedGender;

      return matchesSearch && matchesGender;
    });
  }

  onSearchChange(event: any) {
    this.searchTerm = event.detail.value || '';
  }

  filterByGender(gender: string) {
    this.selectedGender = gender;
  }

  toggleHighlight(id: number) {
    this.highlightedId =
      this.highlightedId === id ? null : id;
  }
}
