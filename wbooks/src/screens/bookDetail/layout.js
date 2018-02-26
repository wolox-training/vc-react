import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { GO_BACK } from './strings';
import styles from './styles.scss';
import routes from '../../config/routes';
import BookData from '../../components/BookData';
import BookSuggestions from '../../components/BookSuggestions';
import Separator from '../../components/Separator';
import BookComments from '../../components/BookComments';

class BookDetail extends Component {
  render() {
    return (
      <Fragment>
        <Link to={routes.home()} className={styles.breadCrumb}> {GO_BACK} </Link>
        <div className={styles.bookDetailContainer}>
          <BookData book={this.props.book}/>
          <Separator />
          <BookSuggestions />
          <Separator />
          <BookComments />
        </div>
      </Fragment>
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
