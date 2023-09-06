import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  book?: Book;
}
