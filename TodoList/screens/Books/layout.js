import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators } from '../../redux/books/actions';
import BooksList from '../../components/BooksList';

export default class Books extends Component {

  render() {
    if(this.props.books) {
      return (
        <BooksList
          books={this.props.books}
          handleClickBook={this.props.handleClickBook}
        />
      );
    }
    return (
      <Text>No hay libros wachin</Text>
    );
  }
}

const bookShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  image_url: PropTypes.string
});

Books.propTypes = {
  books: PropTypes.arrayOf( bookShape ).isRequired,
  handleClickBook: PropTypes.func.isRequired
};

