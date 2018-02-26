import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './styles.scss';
import addBook from '../../images/add_book.svg';
import notifications from '../../images/notifications.svg';
import perfilExample from '../../images/perfilexample.jpg';

class Menu extends Component {
  render() {
    return (
      <div className={styles.menu}>
        <img
          className={styles.menuItem}
          alt = 'notifications'
          src = {notifications}
        />
        <img
          className={styles.menuItem}
          alt = 'add-book'
          src = {addBook}
        />
        <img
          className={classNames({[styles.perfil]: true, [styles.menuItem]: true})}
          alt = 'perfil'
          src = {perfilExample}
        />
      </div>
    );
  }
}

export default Menu;
