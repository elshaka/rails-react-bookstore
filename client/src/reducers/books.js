const booksReducer = (books = [], action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return action.books;
    case 'CREATE_BOOK':
      return [...books, action.book];
    case 'REMOVE_BOOK':
      return books.filter(book => book.id !== action.book.id);
    default:
      return books;
  }
};

export default booksReducer;
