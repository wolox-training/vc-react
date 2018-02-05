import React, { Component } from 'react';

import styles from './BookComments.styles.scss';
import AddComment from './add-comment/AddComment';
import CommentList from './comment-list/CommentList';

class BookComments extends Component {
  render() {
    return (
      <div>
        <h2 className={styles.title}> Comentarios </h2>
        <div className={styles.commentsContainer}>
          <AddComment />
          <CommentList />
        </div>
      </div>
    );
  }
}

export default BookComments;