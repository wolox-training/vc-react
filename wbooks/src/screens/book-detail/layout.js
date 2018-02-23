import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { GO_BACK } from './strings';
import styles from './styles.scss';
import routes from '../../config/routes';
import BookDataContainer from '../../components/book-data/index';
import BookSuggestionsContainer from '../../components/book-suggestions/index';
import SeparatorContainer from '../../components/separator/index';
import BookCommentsContainer from '../../components/book-comments/index';

class BookDetail extends Component {
  render() {
    return (
      <div>
        <Link to={routes.home()} className={styles.breadCrumb}> {GO_BACK} </Link>
        <div className={styles.bookDetailContainer}>
          <BookDataContainer book={this.props.book}/>
          <SeparatorContainer />
          <BookSuggestionsContainer />
          <SeparatorContainer />
          <BookCommentsContainer />
        </div>
      </div>
    );
  }
}

BookDetail.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    image_url: PropTypes.string,
    actual_rent: PropTypes.number
  }).isRequired
};

export default BookDetail;
