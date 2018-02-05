import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Image.styles.scss';
import defaultBook from '../../../images/default_book.svg';

class Image extends Component {
  render() {
    if (this.props.image_url) {
      return (
        <img
          className={styles.image}
          alt={'book_' + this.props.bookId}
          src={this.props.image_url}
        />
      );
    } else {
      return (
        <div className={styles.image}>
          <img
            className={styles.defaultImage}
            alt={'book_' + this.props.bookId}
            src={defaultBook}
          />
        </div>
      );
    }
  }
}

Image.propTypes = {
  bookId: PropTypes.number.isRequired,
  image_url: PropTypes.string
};

export default Image;
