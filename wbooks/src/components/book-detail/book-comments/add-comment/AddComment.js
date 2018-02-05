import React, { Component } from 'react';

import styles from './AddComment.styles.scss';
import perfilExample from '../../../../images/perfilexample.jpg';

class AddComment extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          alt = 'perfil'
          src = {perfilExample}
        />
        <div className={styles.addCommentContainer}>
          <h2 className={styles.title}> Agregar comentario </h2>
          <textarea className={styles.textarea} rows='6'></textarea>
          <button className={styles.button}> Enviar </button>
        </div>
      </div>
    );
  }
}

export default AddComment;