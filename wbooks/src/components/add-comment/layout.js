import React, { Component } from 'react';

import strings from './strings';
import styles from './styles.scss';
import perfilExample from '../../images/perfilexample.jpg';

class AddComment extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          alt = {strings.profile}
          src = {perfilExample}
        />
        <div className={styles.addCommentContainer}>
          <h2 className={styles.title}> {strings.AddComment} </h2>
          <textarea className={styles.textarea} rows='6'></textarea>
          <button className={styles.button}> {strings.send} </button>
        </div>
      </div>
    );
  }
}

export default AddComment;