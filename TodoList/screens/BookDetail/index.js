import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { actionCreators } from '../../redux/books/actions';
import BookDetail from './layout';

class BooksDetailViewContainer extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
    headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
      headerStyle:{
          backgroundColor:'white',
      },
  });

  componentDidMount() {
    this.props.dispatch(actionCreators.getBook(this.props.navigation.state.params.id));
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

export default connect(mapStateToProps)(BooksDetailViewContainer);