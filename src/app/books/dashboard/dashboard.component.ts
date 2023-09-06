import { Component, OnInit } from '@angular/core';
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
export class DashboardComponent implements OnInit {
  books: Book[];
  sum = 0;

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
      {
        isbn: '987654321',
        title: 'Angular 3',
        description: 'Fortgeschrittene Programmierung',
        rating: 3,
        price: 39.5,
      },
    ];
  }

  ngOnInit(): void {
    // Wann constructor, wann onInit?
    this.sum = this.books.length;
  }
}
