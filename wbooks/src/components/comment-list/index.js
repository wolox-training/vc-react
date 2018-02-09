import React, { Component } from 'react';

import styles from './styles.scss';
import CommentContainer from '../comment/index';

class CommentListContainer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <CommentContainer />
        <CommentContainer />
      </div>
    );
  }
}

export default CommentListContainer;
