import React, { Component, } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './styles.scss';
import ImageContainer from '../image/index';
import routes from '../../config/routes';

class BookCard extends Component {
  render() {
    return (
      <Link to={routes.books(this.props.book.id)}>
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
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    image_url: PropTypes.string
  }).isRequired
};

export default BookCard;
