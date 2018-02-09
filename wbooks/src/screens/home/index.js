import React, { Component } from 'react';

import Home from './layout';
import BooksData  from '../../data/books.json';

class HomeContainer extends Component {
  state = { items: BooksData };

  componentWillMount() {
    this.data = '';
    this.type = '';
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const data = this.data;
    const type = this.type;
    let newItems = BooksData;

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
          BooksData.filter(item => !newItems.includes(item) && item[property].includes(data.toLowerCase()))
        );
      })
    }

    this.setState({
      items: newItems
    });
  }

  handleDataChange(e) {
    this.data = e.target.value;
  }

  handleTypeChange(e) {
    this.type = e.target.value;
  }

  render() {
    return (
      <Home
        items={this.state.items}
        handleSubmit={this.handleSubmit}
        handleDataChange={this.handleDataChange.bind(this)}
        handleTypeChange={this.handleTypeChange.bind(this)}
      />
    );
  }
}

export default HomeContainer;
