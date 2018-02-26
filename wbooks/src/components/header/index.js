import React, { Component } from 'react';

import styles from './styles.scss';
import MenuContainer from '../Menu';
import wlogo from '../../images/wbooks_logo.svg';

class HeaderContainer extends Component {
  render() {
    return (
      <div className={styles.header}>
        <img className={styles.logo} alt="logo" src={wlogo}/>
        <MenuContainer />
      </div>
    );
  }
}

export default HeaderContainer;
