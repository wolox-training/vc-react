import React, { Component } from 'react';

import { COMMENTS } from './strings';
import styles from './styles.scss';
import AddCommentContainer from '../add-comment/index';
import CommentListContainer from '../comment-list/index';

class BookCommentsContainer extends Component {
  render() {
    return (
      <div>
        <h2 className={styles.title}> {COMMENTS} </h2>
        <div className={styles.commentsContainer}>
          <AddCommentContainer />
          <CommentListContainer />
        </div>
      </div>
    );
  }
}

export default BookCommentsContainer;
