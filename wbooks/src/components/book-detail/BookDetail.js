import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './BookDetail.styles.scss';
import Books from './../../data/books.json';
import BookData from './book-data/BookData';
import BookSuggestions from './book-suggestions/BookSuggestions';
import Separator from '../separator/Separator';
import BookComments from './book-comments/BookComments';

class BookDetail extends Component {
  componentWillMount() {
    const id = this.props.match.params.number;
    const item = Books.find(book => book.id.toString() === id);

    this.setState({
      item: item
    })
  }

  render() {
    return (
      <div>
      <Link to='/' className={styles.breadCrumb}> &lt;Volver </Link>
      <div className={styles.bookDetailContainer}>
        <BookData book={this.state.item}/>
        <Separator />
        <BookSuggestions />
        <Separator />
        <BookComments />
      </div>
      </div>
    );
  }
}

export default BookDetail;
