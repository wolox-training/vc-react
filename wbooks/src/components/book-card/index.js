import React, { Component, } from 'react';

import BookCard from './layout';
import propTypes from '../../consts/propTypes';

class BookCardContainer extends Component {
  render() {
    return (
      <BookCard book={this.props.book}/>
    );
  }
}

BookCardContainer.propTypes = {
  book: propTypes.book.isRequired
};

export default BookCardContainer;
