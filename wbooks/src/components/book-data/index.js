import React, { Component } from 'react';

import { DESCRIPTION, RENT } from './strings';
import styles from './styles.scss';
import ImageContainer from '../image/index';
import { BookPropType } from '../../consts/propTypes';

class BookDataContainer extends Component {
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

BookDataContainer.propType = {
  book: BookPropType.isRequired
};

export default BookDataContainer;
