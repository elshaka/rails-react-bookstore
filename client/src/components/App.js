import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import CategoryFilter from '../containers/CategoryFilter';

const App = () => (
  <div className="BookStore">
    <BookForm />
    <CategoryFilter />
    <BookList />
  </div>
);

export default App;
