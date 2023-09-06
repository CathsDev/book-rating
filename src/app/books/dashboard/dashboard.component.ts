import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  books: Book[];

  constructor() {
    this.books = [
      {
        isbn: '123456789',
        title: 'Angular 1',
        description: 'Grundlagen',
        rating: 5,
        price: 42.9,
      },
      {
        isbn: '987654321',
        title: 'Angular 2',
        description: 'Fortgeschrittene Programmierung',
        rating: 4,
        price: 39.5,
      },
    ];
  }
}
