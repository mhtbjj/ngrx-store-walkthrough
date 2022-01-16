import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectBooks, selectCollectionState } from './state/book.selectors';
import * as BookActions from './state/book.actions';
import { BookService } from './book.service';
import { Observable } from 'rxjs';
import { Book } from './state/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // books$ = this.store.pipe(select(selectBooks));
  // bookCollection$ = this.store.pipe(select(selectCollectionState));
  books$: Observable<ReadonlyArray<Book>>;
  bookCollection$: Observable<ReadonlyArray<string>>;
  constructor(private store: Store, private bookService: BookService) {
    this.books$ = this.store.select(selectBooks);
    this.bookCollection$ = this.store.select(selectCollectionState);
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => {
      debugger;
      this.store.dispatch(BookActions.retrievedBookList({ books }));
    });
  }

  onAdd(bookId: string) {
    this.store.dispatch(BookActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BookActions.removeBook({ bookId }));
  }
}
