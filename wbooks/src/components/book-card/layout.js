import React, { Component, } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';
import ImageContainer from '../image/index';
import routes from '../../config/routes' 
import propTypes from '../../consts/propTypes';

class BookCard extends Component {
  render() {
    return (
      <Link to={routes.detail(this.props.book.id)}>
        <div className={styles.bookCard}>
          <ImageContainer image_url={this.props.book.image_url} bookId={this.props.book.id} image_size={styles.image}/>
          <p className={styles.title}> {this.props.book.title} </p>
          <p className={styles.author}> {this.props.book.author} </p>
        </div>
      </Link>
    );
  }
}

BookCard.propTypes = {
  book: propTypes.book.isRequired
};

export default BookCard;
