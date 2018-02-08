import React, { Component } from 'react';

import strings from './strings';
import styles from './styles.scss';
import perfilExample from '../../images/perfilexample.jpg';

class Comment extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          alt = {strings.profile}
          src = {perfilExample}
        />
        <div className={styles.commentContainer}>
          <h2 className={styles.title}> {strings.name} </h2>
          <h4 className={styles.date}> {strings.date} </h4>
          <p className={styles.comment}> {strings.comment} </p>
        </div>
      </div>
    );
  }
}

export default Comment;