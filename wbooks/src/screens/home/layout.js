import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import strings from './strings';
import styles from './styles.scss';
import propTypes from '../../consts/propTypes';
import BookCardContainer from '../../components/book-card/index';
import SearchImage from '../../images/search.svg';

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.form}>
          <select name='type' className={classNames({[styles.select]: true, [styles.input]: true})} onChange={this.props.handleTypeChange}>
            <option className={styles.option} value='' default>{strings.selectFilter}</option>
            <option className={styles.option} key='title' value='title'>{strings.title}</option>
            <option className={styles.option} value='author'>{strings.author}</option>
          </select>
          <input name='data' className={classNames({[styles.option]: true, [styles.input]: true})} onChange={this.props.handleDataChange} placeholder={strings.search}></input>
          <button className={styles.searchButton} onClick={this.props.handleSubmit}>
            <img src={SearchImage} alt='search' />
          </button>
        </div>
        <div className={styles.bookContainer}>
          {this.props.items.map(item => <BookCardContainer key={item.id} book={item}/>)}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  items: PropTypes.arrayOf( propTypes.book ).isRequired,
  handleDataChange: PropTypes.func.isRequired,
  handleTypeChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Home;