import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Footer from '../../components/Footer';
import Title from '../../components/Title';
import Input from '../../components/Input';
import TodoList from '../../components/TodoList';

import { styles } from './styles';

class Todo extends Component {
  render() {
    return (
      <View style={styles.container}>
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
        </View>
        <ScrollView style={styles.content}>
          <TodoList items={this.props.items} handleRemove={this.props.handleRemove} handleToggle={this.props.handleToggle}/>
        </ScrollView>
        <TouchableOpacity onPress={this.props.handleRemoveAllCompleted}>
          <Footer text='Remove completed items' />
        </TouchableOpacity>
      </View>
    );
  }
}

Todo.propTypes = {
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

export default Todo;
