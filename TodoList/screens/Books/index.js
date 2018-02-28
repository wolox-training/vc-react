import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { actionCreators } from '../../redux/books/actions';
import Books from './layout';

class BooksViewContainer extends Component {

  handleClickBook = (id, title) => {
    return () => this.props.navigation.navigate('BookDetail', {id, title});
  }

  componentDidMount = () => {
    this.props.dispatch(actionCreators.getBooks());
  }

  render() {
    return (
      <Books
        books={this.props.books}
        handleClickBook={this.handleClickBook}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
      books: state.books.books
  };
};

export default connect(mapStateToProps)(BooksViewContainer);
