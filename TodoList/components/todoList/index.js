import React, { Component } from 'react';
import { Button, FlatList, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import CheckBox from '../checkbox/index';
import { styles } from './styles';
import { red } from '../../consts/colors';

const extractKey = ({name}) => name

export default class TodoList extends Component {

  renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Text>
          {item.name}
        </Text>
        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={() => this.props.handleToggle(item)}>
            <CheckBox isChecked={item.status === 'complete'} />
          </TouchableOpacity>
          <Button
            onPress={() => this.props.handleRemove(item)}
            title="X"
            color={red}
          />
        </View>
      </View>
    )
  }

  render() {
    return (
      <FlatList
        data={this.props.items}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired
    })
  ),
  handleRemove: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
}