import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { EMAIL, PASSWORD, CONFIRM_PASSWORD, NAME, LAST_NAME, SIGNUP, LOGIN } from './strings';
import styles from './styles.scss';
import wlogo from '../../images/wbooks_logo.svg';
import routes from '../../config/routes';

class Signup extends Component {
  render() {
    const emailError = this.props.formErrors.email && this.props.formErrors.email.length > 0 ? this.props.formErrors.email : '';
    const passwordError = this.props.formErrors.password && this.props.formErrors.password.length > 0 ? this.props.formErrors.password : '';
    const confirmPasswordError = this.props.formErrors.confirm_password && this.props.formErrors.confirm_password.length > 0 ? this.props.formErrors.confirm_password : '';
    const nameError = this.props.formErrors.first_name && this.props.formErrors.first_name.length > 0 ? this.props.formErrors.first_name : '';
    const lastNameError = this.props.formErrors.last_name && this.props.formErrors.last_name.length > 0 ? this.props.formErrors.last_name : '';
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
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor='confirmPassword'>{CONFIRM_PASSWORD}</label>
              <input
                className={styles.input}
                id='confirm_password'
                name='confirm_password'
                type='password'
                onChange={this.props.handleChange}
              />
              <p className={styles.error}>{confirmPasswordError}</p>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor='first_name'>{NAME}</label>
              <input
                className={styles.input}
                id='first_name'
                name='first_name'
                type='text'
                onChange={this.props.handleChange}
              />
              <p className={styles.error}>{nameError}</p>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor='last_name'>{LAST_NAME}</label>
              <input
                className={styles.input}
                id='last_name'
                name='last_name'
                type='text'
                onChange={this.props.handleChange}
              />
              <p className={styles.error}>{lastNameError}</p>
            </div>
          </div>
          <button className={styles.button}>{SIGNUP}</button>
        </form>
        <Link to={routes.login()} className={styles.textLink}> {LOGIN} </Link>
      </div>
    );
  }
}

Signup.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formErrors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    confirm_password: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string
  }).isRequired
}

export default Signup;
