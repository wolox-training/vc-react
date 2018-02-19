import React, { Component } from 'react';

import Home from './layout';
import BooksData  from '../../data/books.json';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../actions/items';

class HomeContainer extends Component {
  state = { items: BooksData };

  componentWillMount = () => {
    this.data = '';
    this.type = '';
    itemsFetchData('https://wbooks-api-stage.herokuapp.com/api/v1/books');
  }

  handleSubmit = (e) => {
    const data = this.data;
    const type = this.type;
    let newItems = this.props.items;

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

    this.setState({
      items: newItems
    });
  }

  handleDataChange = (e) => {
    this.data = e.target.value;
  }

  handleTypeChange = (e) => {
    this.type = e.target.value;
  }

  render() {
    return (
      <Home
        items={this.state.items}
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
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
