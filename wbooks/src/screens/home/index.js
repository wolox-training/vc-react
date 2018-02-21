import React, { Component } from 'react';

import Home from './layout';
import BooksData  from '../../data/books.json';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/books/actions';

class HomeContainer extends Component {
  state = { items: BooksData };

  componentWillMount = () => {
    this.data = '';
    this.type = '';
    this.props.dispatch(actionCreators.getBooks());
  }

  handleSubmit = (e) => {
    this.props.dispatch(actionCreators.changeFilters({filterType: this.data, filterData: this.data}));
  }

  handleDataChange = (e) => {
    this.data = e.target.value;
  }

  handleTypeChange = (e) => {
    this.type = e.target.value;
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
          this.props.items.filter(item => !newItems.includes(item) && item[property].includes(data.toLowerCase()))
        );
      })
    }
    return newItems;
  }

  render() {
    return (
      <Home
        items={this.filterItems(this.props.items)}
        handleSubmit={this.handleSubmit}
        handleDataChange={this.handleDataChange}
        handleTypeChange={this.handleTypeChange}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
      items: state.items,
      filters: state.filters
  };
};

export default connect(mapStateToProps)(HomeContainer);
