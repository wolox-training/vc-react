import React, { Component } from 'react';

import Home from './layout';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/books/actions';

class HomeContainer extends Component {
  state = { data: '', type: '' };

  componentDidMount = () => {
    this.props.dispatch(actionCreators.getBooks());
  }

  handleSubmit = (e) => {
    this.props.dispatch(actionCreators.changeFilters({filterType: this.state.type, filterData: this.state.data}));
  }

  handleDataChange = (e) => {
    this.setState({data: e.target.value});
  }

  handleTypeChange = (e) => {
    this.setState({type: e.target.value});
  }

  filterItems = (items) => {
    let newItems = items;
    const data = this.props.filters.filterData;
    const type = this.props.filters.filterType;
    if (data && data.length > 0) {
      newItems = []
      let properties;
      if (type === 'author' || type === 'title') {
        properties = [type];
      } else {
        properties = ['title', 'author'];
      }
      properties.forEach(property => {
        newItems = newItems.concat(
          this.props.books.filter(item => !newItems.includes(item) && item[property].includes(data.toLowerCase()))
        );
      })
    }
    return newItems;
  }

  render() {
    return (
      <Home
        items={this.filterItems(this.props.books)}
        handleSubmit={this.handleSubmit}
        handleDataChange={this.handleDataChange}
        handleTypeChange={this.handleTypeChange}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
      books: state.books.books,
      filters: state.books.filters
  };
};

export default connect(mapStateToProps)(HomeContainer);
