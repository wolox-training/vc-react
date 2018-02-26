import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Signup from './layout';
import { REQUIRED_ERROR, EMAIL_ERROR, PASSWORD_ERROR, NOT_MATCHING_PASSWORDS_ERROR, ONLY_LETTERS_ERROR } from './strings';
import { validateEmail, validatePassword, validateOnlyLetters } from '../../utils/Validator';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/auth/actions';
import routes from '../../config/routes';

class SignupContainer extends Component {
  state = {
    formErrors: {email: '', password: '', confirmPassword: '', firstName: '', lastName:''}
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateForm(
      () => {
        if (this.isValidForm()) {
          this.props.dispatch(actionCreators.signup({
            email: this.state.email,
            password: this.state.password,
            confirm_password: this.state.confirmPassword,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            locale: 'en' 
          }));
        }
      }
    )
  }

  validateForm = (callback) => {
    const email = this.state.email && this.state.email.length > 0 ? (validateEmail(this.state.email) ? '' : EMAIL_ERROR) : REQUIRED_ERROR;
    const password = this.state.password && this.state.email.length > 0 ? (validatePassword(this.state.password) ? '' : PASSWORD_ERROR) : REQUIRED_ERROR;
    const confirmPassword = this.state.confirmPassword && this.state.confirmPassword.length > 0 ? (this.state.confirmPassword !== this.state.password ? NOT_MATCHING_PASSWORDS_ERROR : '') : REQUIRED_ERROR;
    const firstName = this.state.firstName && this.state.firstName.length > 0 ? (validateOnlyLetters(this.state.firstName) ? '': ONLY_LETTERS_ERROR) : REQUIRED_ERROR;
    const lastName = this.state.lastName && this.state.lastName.length > 0 ? (validateOnlyLetters(this.state.lastName) ? '' : ONLY_LETTERS_ERROR) : REQUIRED_ERROR;;
    this.setState({ formErrors: {email, password, confirmPassword, firstName, lastName} }, callback);
  }

  isValidForm = () => {
    const { email, password, confirmPassword, firstName, lastName } = this.state.formErrors;

    return (
      !(email && email.length > 0) &&
      !(password && password.length > 0) &&
      !(confirmPassword && confirmPassword.length > 0) &&
      !(firstName && firstName.length > 0) &&
      !(lastName && lastName.length > 0)
    );
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: routes.dashboard() } }

    if (this.props.access_token.length > 0) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <Signup
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        formErrors={this.state.formErrors}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      access_token: state.auth.access_token,
      renew_id: state.auth.renew_id
  };
};

export default connect(mapStateToProps)(SignupContainer);
