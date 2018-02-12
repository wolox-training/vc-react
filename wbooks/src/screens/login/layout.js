import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { EMAIL, PASSWORD, LOGIN } from './strings';
import styles from './styles.scss';
import wlogo from '../../images/wbooks_logo.svg';

class Login extends Component {
  render() {
    const emailError = this.props.formErrors.email && this.props.formErrors.email.length > 0 ? this.props.formErrors.email : '';
    const passwordError = this.props.formErrors.password && this.props.formErrors.password.length > 0 ? this.props.formErrors.password : '';
    return (
      <div className={styles.container}>
        <img className={styles.logo} alt="logo" src={wlogo}/>
        <form className={styles.form} onSubmit={this.props.handleSubmit}>
          <div className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor='email'>{EMAIL}</label>
              <input
                className={styles.input}
                id='email'
                name='email'
                type='text'
                onChange={this.props.handleChange}
              />
              <p className={styles.error}>{emailError}</p>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor='password'>{PASSWORD}</label>
              <input
                className={styles.input}
                id='password'
                name='password'
                type='password'
                onChange={this.props.handleChange}
              />
              <p className={styles.error}>{passwordError}</p>
            </div>
          </div>
          <button className={styles.button}>{LOGIN}</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formErrors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired
}

export default Login;
