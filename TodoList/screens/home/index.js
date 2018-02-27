import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from './layout';
import { actionCreators } from '../../redux/todo/actions';

class HomeContainer extends Component {

  state = {itemName: '' }

  handleChange = (text) => {
    this.setState({itemName: text});
  }

  handleRemove = (item) => {
    this.props.dispatch(actionCreators.removeTodo(item));
  }

  handleToggle = (item) => {
    if(item.status !== 'complete') {
      this.props.dispatch(actionCreators.togleTodoCompleted(item));
    }
  }

  handleRemoveAllCompleted = () => {
    this.props.dispatch(actionCreators.removeAllCompletedTodos());
  }

  handleSubmit = () => {
    this.props.dispatch(actionCreators.addTodo({name: this.state.itemName, status: 'incomplete'}));
  }

  render() {
    return (
      <Home 
        items={this.props.items}
        handleChange={this.handleChange}
        handleRemove={this.handleRemove}
        handleToggle={this.handleToggle}
        handleSubmit={this.handleSubmit}
        handleRemoveAllCompleted={this.handleRemoveAllCompleted}
      />
    );
  }
}


const mapStateToProps = (state) => {
  return {
      items: state.todo.items
  };
};

export default connect(mapStateToProps)(HomeContainer);