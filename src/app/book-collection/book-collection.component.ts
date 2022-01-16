import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../state/book.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css'],
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<string> | null = [];
  @Output() remove = new EventEmitter<string>();
}
