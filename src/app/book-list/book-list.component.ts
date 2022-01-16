import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../state/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  @Input() books: ReadonlyArray<Book> | null = [];
  @Output() add = new EventEmitter<string>();
}
