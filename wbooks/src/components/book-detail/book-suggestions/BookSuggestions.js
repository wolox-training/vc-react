import React, { Component } from 'react';
import Image from '../../image/Image';

import styles from './BookSuggestions.styles.scss';

class BookSuggestions extends Component {
  render() {
    return (
      <div>
        <h2 className={styles.title}> Sugerencias </h2>
        <div className={styles.suggestionsContainer}>
          <Image image_url={undefined} bookId={1} image_size={styles.image}/>
          <Image image_url={undefined} bookId={2} image_size={styles.image}/>
          <Image image_url={undefined} bookId={3} image_size={styles.image}/>
          <Image image_url={undefined} bookId={4} image_size={styles.image}/>
        </div>
      </div>
    );
  }
}

export default BookSuggestions;