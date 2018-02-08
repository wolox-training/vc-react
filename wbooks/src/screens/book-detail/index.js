import React, { Component } from 'react';

import BookDetail from './layout';
import Books from '../../data/books.json';

class BookDetailContainer extends Component {
  componentWillMount() {
    const id = this.props.match.params.number;
    const item = Books.find(book => book.id.toString() === id);

    this.setState({
      item: item
    })
  }

  render() {
    return (
      <BookDetail book={this.state.item} />
    );
  }
}

export default BookDetailContainer;
