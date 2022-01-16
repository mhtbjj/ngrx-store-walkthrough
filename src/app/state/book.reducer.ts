import { createReducer, on } from '@ngrx/store';
import { initialBookState } from './book.state';
import * as BookActions from './book.actions';

export const bookReducer = createReducer(
  initialBookState,
  on(BookActions.retrievedBookList, (state, action) => {
    // return [...state, ...action.books];
    return [...action.books];
  })
);
