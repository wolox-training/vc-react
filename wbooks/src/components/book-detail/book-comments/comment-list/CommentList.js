import React, { Component } from 'react';

import styles from './CommentList.styles.scss';
import Comment from './comment/Comment';

class CommentList extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Comment />
        <Comment />
      </div>
    );
  }
}

export default CommentList;