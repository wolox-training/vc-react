import React, { Component } from 'react';

import { ADD_COMMENT, SEND, PROFILE } from './strings';
import styles from './styles.scss';
import perfilExample from '../../images/perfilexample.jpg';

class AddCommentContainer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          alt = {PROFILE}
          src = {perfilExample}
        />
        <div className={styles.addCommentContainer}>
          <h2 className={styles.title}> {ADD_COMMENT} </h2>
          <textarea className={styles.textarea} rows='6'></textarea>
          <button className={styles.button}> {SEND} </button>
        </div>
      </div>
    );
  }
}

export default AddCommentContainer;
