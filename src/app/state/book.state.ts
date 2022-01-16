import { Book } from './book.model';

export const initialCollectionState: ReadonlyArray<string> = [];

export const initialBookState: ReadonlyArray<Book> = [];

export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}
