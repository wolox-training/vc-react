import React, { Component } from 'react';

import { SUGGESTIONS } from './strings';
import styles from './styles.scss';
import ImageContainer from '../image/index';

class BookSuggestions extends Component {
  render() {
    return (
      <div>
        <h2 className={styles.title}> {SUGGESTIONS} </h2>
        <div className={styles.suggestionsContainer}>
          <ImageContainer bookId={1} image_size={styles.image}/>
          <ImageContainer bookId={2} image_size={styles.image}/>
          <ImageContainer bookId={3} image_size={styles.image}/>
          <ImageContainer bookId={4} image_size={styles.image}/>
        </div>
      </div>
    );
  }
}

export default BookSuggestions;
