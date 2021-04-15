import axios from 'axios';

const setBooks = books => ({ type: 'SET_BOOKS', books });
const createBook = book => ({ type: 'CREATE_BOOK', book });
const removeBook = book => ({ type: 'REMOVE_BOOK', book });
const changeFilter = filter => ({ type: 'CHANGE_FILTER', filter });
const setLoading = loading => ({ type: 'SET_LOADING', loading });

const getBooks = () => dispatch => {
  dispatch(setLoading(true));
  axios
    .get('/books.json')
    .then(response => {
      dispatch(setBooks(response.data));
      dispatch(setLoading(false));
    });
};

const newBook = book => dispatch => {
  axios
    .post('/books.json', { book })
    .then(response => {
      dispatch(createBook(response.data));
    });
};

const destroyBook = book => dispatch => {
  axios
    .delete(`/books/${book.id}.json`)
    .then(() => {
      dispatch(removeBook(book));
    });
};

export {
  getBooks, newBook, createBook, destroyBook, changeFilter,
};
