import { createAction, props } from '@ngrx/store';
import { Book } from './book.model';
import { BookEnum } from './book.enums';

export const addBook = createAction(
  BookEnum.ADD_BOOK,
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  BookEnum.REMOVE_BOOK,
  props<{ bookId: string }>()
);
// export const retrievedBookList = createAction(BookEnum.RETRIEVE_BOOK, props<{books: Array<Book>}>());
export const retrievedBookList = createAction(
  BookEnum.RETRIEVE_BOOK,
  props<{ books: ReadonlyArray<Book> }>()
);
