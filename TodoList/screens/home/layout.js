import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Footer from '../../components/footer/index';
import Title from '../../components/title/index';
import Input from '../../components/input/index';
import TodoList from '../../components/todoList/index';

import { styles } from './styles';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Title text='Todo List'/>
        <View style={styles.inputContainer}>
          <Input
            placeholder='Enter an item!'
            handleChange={this.props.handleChange}
            handleSubmit={this.props.handleSubmit}
          />
          <Button
            onPress={this.props.handleSubmit}
            title="OK"
          />
        </View>
        <TodoList items={this.props.items} handleRemove={this.props.handleRemove} handleToggle={this.props.handleToggle}/>
        <TouchableOpacity onPress={this.props.handleRemoveAllCompleted}>
          <Footer text='Remove completed items' />
        </TouchableOpacity>
      </View>
    );
  }
}

Home.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleRemoveAllCompleted: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired
    })
  )
}
