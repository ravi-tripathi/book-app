import { ActionReducer, Action } from '@ngrx/store';

export const POST_BOOKS = 'POST_BOOKS';
export const CURRENT_BOOK = 'CURRENT_BOOK';

export function booksReducer(state: any, action: any) {
  if (state === void 0) { state = []; }
  switch (action.type) {
    case POST_BOOKS:
      return action.payload;
    default:
      return state;
  }
}

export function currentBookReducer(state: any, action: any) {
  if (state === void 0) { state = {}; }
  switch (action.type) {
    case CURRENT_BOOK:
      return action.payload;
    default:
      return state;
  }
}
