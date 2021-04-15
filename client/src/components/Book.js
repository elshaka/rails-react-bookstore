import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, remove }) => (
  <tr>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td><button type="button" onClick={() => remove(book)}>Remove</button></td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    ID: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
