import React, { Component } from 'react';
import { Button, FlatList, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import CheckBox from '../Checkbox';
import { styles } from './styles';
import { red } from '../../utils/colors';

const extractKey = ({id}) => `${id}`;

class TodoList extends Component {

  renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={this.props.handleClickBook(item.id, item.title)}>
        <Text>{item.title}</Text>
        <Text>{item.author}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <FlatList
        data={this.props.books}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
}

const bookShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  image_url: PropTypes.string
});

TodoList.propTypes = {
  books: PropTypes.arrayOf(bookShape),
  handleClickBook: PropTypes.func.isRequired
}

export default TodoList;