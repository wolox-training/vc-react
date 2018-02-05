import React, { Component } from 'react';

import styles from './Comment.styles.scss';
import perfilExample from '../../../../../images/perfilexample.jpg';

class Comment extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          alt = 'perfil'
          src = {perfilExample}
        />
        <div className={styles.commentContainer}>
          <h2 className={styles.title}> Kimberly Carter </h2>
          <h4 className={styles.date}> xx/xx/xx </h4>
          <p className={styles.comment}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat.
          </p>
        </div>
      </div>
    );
  }
}

export default Comment;