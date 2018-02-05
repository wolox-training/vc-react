import React, { Component } from 'react';

import styles from './Header.styles.scss';
import Menu from './menu/Menu';
import wlogo from '../../images/wbooks_logo.svg';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <img className={styles.logo} alt="logo" src={wlogo}/>
        <Menu />
      </div>
    );
  }
}

export default Header;
