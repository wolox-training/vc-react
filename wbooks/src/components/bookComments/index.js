import React, { Component, Fragment } from 'react';

import { COMMENTS } from './strings';
import styles from './styles.scss';
import AddCommentContainer from '../addComment/index';
import CommentListContainer from '../commentList/index';

class BookComments extends Component {
  render() {
    return (
      <Fragment>
        <h2 className={styles.title}> {COMMENTS} </h2>
        <div className={styles.commentsContainer}>
          <AddCommentContainer />
          <CommentListContainer />
        </div>
      </Fragment>
    );
  }
}

export default BookComments;
