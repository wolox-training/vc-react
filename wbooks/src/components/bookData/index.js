import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DESCRIPTION, RENT } from './strings';
import styles from './styles.scss';
import ImageContainer from '../image/index';

class BookData extends Component {
  render() {
    return (
      <div className={styles.bookDataContainer}>
        <ImageContainer image_url={this.props.book.image_url} bookId={this.props.book.id} image_size={styles.image}/>
        <div className={styles.dataContainer}>
          <div>
            <p className={styles.title}> {this.props.book.title} </p>
            <p className={styles.author}> {this.props.book.author} </p>
            <p className={styles.year}> {this.props.book.year} </p>
            <p className={styles.genre}> {this.props.book.genre} </p>
            <p className={styles.description}>
              {DESCRIPTION}
            </p>
          </div>
          <button className={styles.button}> {RENT} </button>
        </div>
      </div>
    );
  }
}

BookData.propType = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    image_url: PropTypes.string
  }).isRequired
};

export default BookData;
