import React, { Component } from 'react';

import styles from './styles.scss';
import Comment from '../comment/index';

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
