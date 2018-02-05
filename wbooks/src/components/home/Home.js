import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './Home.styles.scss';
import Header from '../header/Header';
import BookCard from '../book-card/BookCard';
import BooksData  from '../../data/books.json';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      filterType: null,
      filterData: ''
    }
  }

  componentWillMount() {
    this.setState({
      items: BooksData
    })
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const data = this.data.value;
    const type = this.type.value;
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
      filterType: type,
      filterData: data,
      items: newItems
    });

  }

  render() {
    return (
      <div>
        <Header/>
        <div className={styles.container}>
          <div className={styles.form}>
            <select className={classNames({[styles.select]: true, [styles.input]: true})} ref={(input) => { this.type = input; }}>
              <option className={styles.option} value='' default>Seleccionar filtro</option>
              <option className={styles.option} key='title' value='title'>Título</option>
              <option className={styles.option} value='author'>Autor</option>
            </select>
            <input className={classNames({[styles.option]: true, [styles.input]: true})} ref={(input) => { this.data = input; }} placeholder='Buscar...'></input>
            <button className={styles.searchButton} onClick={this.handleSubmit}>
              <img src={require('../../images/search.svg')} alt='search' />
            </button>
          </div>
          <div className={styles.bookContainer}>
            {this.state.items.map(item => <BookCard key={item.id} book={item}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
