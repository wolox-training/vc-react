import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/books/actions';

import BookDetail from './layout';

class BookDetailContainer extends Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.getBook(this.props.match.params.number));
  }

  render() {
    if (this.props.loading) {
      return null;
    }
    return (
      <BookDetail book={this.props.book} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.books.loading,
    book: state.books.book
  };
}

export default connect(mapStateToProps)(BookDetailContainer);
