import React, { Component } from 'react';

import strings from './strings';
import styles from './styles.scss';
import ImageContainer from '../image/index';

class BookSuggestions extends Component {
  render() {
    return (
      <div>
        <h2 className={styles.title}> {strings.suggestions} </h2>
        <div className={styles.suggestionsContainer}>
          <ImageContainer image_url={undefined} bookId={1} image_size={styles.image}/>
          <ImageContainer image_url={undefined} bookId={2} image_size={styles.image}/>
          <ImageContainer image_url={undefined} bookId={3} image_size={styles.image}/>
          <ImageContainer image_url={undefined} bookId={4} image_size={styles.image}/>
        </div>
      </div>
    );
  }
}

export default BookSuggestions;