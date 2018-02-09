import React, { Component } from 'react';

import { COMMENT, DATE, NAME, PROFILE} from './strings';
import styles from './styles.scss';
import perfilExample from '../../images/perfilexample.jpg';

class CommentContainer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          alt = {PROFILE}
          src = {perfilExample}
        />
        <div className={styles.commentContainer}>
          <h2 className={styles.title}> {NAME} </h2>
          <h4 className={styles.date}> {DATE} </h4>
          <p className={styles.comment}> {COMMENT} </p>
        </div>
      </div>
    );
  }
}

export default CommentContainer;
