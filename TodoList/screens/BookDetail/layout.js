import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class BookDetail extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.book.title}</Text>
        <Text>{this.props.book.author}</Text>
        <Text>{this.props.book.genre}</Text>
        <Text>{this.props.book.year}</Text>
      </View>
    );
  }
}

BookDetail.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    image_url: PropTypes.string,
    actual_rent: PropTypes.number
  }).isRequired
};

export default BookDetail;