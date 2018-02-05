import React, { Component } from 'react';

import { styles } from './BookDetail.styles.scss';
import BookData from './book-data/BookData';

class BookDetail extends Component {
  render() {
    return (
      <div>
        <BookData />
      </div>
    );
  }
}

export default BookDetail;

//<div style={styles.container}>Hello {this.props.match.params.number}</div>
