import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';
import loadingReducer from './loading';

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
  loading: loadingReducer,
});

export default rootReducer;
