import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.scss';
import defaultBook from '../../images/default_book.svg';

class ImageContainer extends Component {
  render() {
    if (this.props.image_url) {
      return (
        <img
          className={classNames({[styles.image]: true, [this.props.image_size]: true})}
          alt={'book_' + this.props.bookId}
          src={this.props.image_url}
        />
      );
    } else {
      return (
        <div className={classNames({[styles.image]: true, [this.props.image_size]: true})}>
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

ImageContainer.propTypes = {
  bookId: PropTypes.number.isRequired,
  image_url: PropTypes.string,
  image_size: PropTypes.string.isRequired
};

export default ImageContainer;
