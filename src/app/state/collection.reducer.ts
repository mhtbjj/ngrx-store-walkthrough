import { Actions } from '@ngrx/effects';
import { createReducer, on } from '@ngrx/store';
import * as BookActions from './book.actions';
import { initialCollectionState } from './book.state';

export const collectionReducer = createReducer(
  initialCollectionState,
  on(BookActions.removeBook, (state, action) => {
    return state.filter((book) => book != action.bookId);
  }),
  on(BookActions.addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;
    return [...state, bookId];
  })
);
