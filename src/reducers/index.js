import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  // Key to the global application state
  // books is an application state
  // List of various states here
  books: BooksReducer
});

export default rootReducer;
