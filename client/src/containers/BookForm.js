import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newBook } from '../actions';

export const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BookForm = ({ newBook }) => {
  const defaultBook = { title: '', category: 'Action' };
  const [book, setBook] = React.useState(defaultBook);

  const handleChange = event => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    newBook({
      ID: Math.floor((Math.random() * 1000) + 1),
      ...book,
    });

    setBook(defaultBook);
  };

  return (
    <div className="BookForm">
      <form>
        <label htmlFor="title">
          Title
          <input required type="text" id="title" name="title" value={book.title} onChange={handleChange} />
        </label>
        <label htmlFor="category">
          Category
          <select required id="category" name="category" value={book.category} onChange={handleChange}>
            { categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

BookForm.propTypes = {
  newBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = { newBook };

export default connect(null, mapDispatchToProps)(BookForm);
