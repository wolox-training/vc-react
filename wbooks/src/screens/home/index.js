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
    console.log(this.type);
    console.log(this.data);
    this.props.dispatch(actionCreators.changeFilters({filterType: this.type, filterData: this.data}));
  }

  handleDataChange = (e) => {
    this.data = e.target.value;
  }

  handleTypeChange = (e) => {
    console.log('PUSSSSS');
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

  console.log(state.books.filters);
  return {
      books: state.books.books,
      filters: state.books.filters
  };
};

export default connect(mapStateToProps)(HomeContainer);
