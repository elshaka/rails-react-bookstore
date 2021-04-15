import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { getBooks, destroyBook } from '../actions';

const BookList = ({
  books, filter, loading, getBooks, destroyBook,
}) => {
  useEffect(() => {
    getBooks();
  }, [getBooks]);

  const filteredBooks = filter ? books.filter(book => book.category === filter) : books;

  return (
    <div className="BookList">
      { loading && <span>Loading...</span> }
      { filteredBooks.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map(book => <Book key={book.id} book={book} remove={destroyBook} />)}
          </tbody>
        </table>
      )}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(Book.propTypes.book).isRequired,
  filter: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  getBooks: PropTypes.func.isRequired,
  destroyBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(getBooks()),
  destroyBook: book => dispatch(destroyBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
