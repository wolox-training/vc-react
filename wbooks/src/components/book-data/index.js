import React, { Component } from 'react';

import BookData from './layout';
import propTypes from '../../consts/propTypes';

class BookDataContainer extends Component {
  render() {
    return (
      <BookData book={this.props.book} />
    );
  }
}

BookDataContainer.propType = {
  book: propTypes.book.isRequired
};

export default BookDataContainer;
