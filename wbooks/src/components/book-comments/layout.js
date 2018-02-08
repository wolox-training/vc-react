import React, { Component } from 'react';

import strings from './strings';
import styles from './styles.scss';
import AddCommentContainer from '../add-comment/index';
import CommentListContainer from '../comment-list/index';

class BookComments extends Component {
  render() {
    return (
      <div>
        <h2 className={styles.title}> {strings.comments} </h2>
        <div className={styles.commentsContainer}>
          <AddCommentContainer />
          <CommentListContainer />
        </div>
      </div>
    );
  }
}

export default BookComments;