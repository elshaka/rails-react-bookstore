import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { categories } from './BookForm';
import { changeFilter } from '../actions';

const CategoryFilter = ({ filter, changeFilter }) => {
  const changeFilterHandler = event => {
    const newFilter = event.target.value;
    if (newFilter === 'All') {
      changeFilter('');
    } else {
      changeFilter(newFilter);
    }
  };

  return (
    <div className="CategoryFilter">
      <label htmlFor="category">
        Filter by category
        <select id="category" value={filter} onChange={changeFilterHandler}>
          { ['All', ...categories].map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
