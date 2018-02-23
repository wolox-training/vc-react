import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Signup from './layout';
import { REQUIRED_ERROR, EMAIL_ERROR, PASSWORD_ERROR, NOT_MATCHING_PASSWORDS_ERROR, ONLY_LETTERS_ERROR } from './strings';
import { validateEmail, validatePassword, validateOnlyLetters } from '../../utils/Validator';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/auth/actions';

class SignupContainer extends Component {
  state = {
    formErrors: {email: '', password: '', confirm_password: '', first_name: '', last_name:''}
  }

  handleChange = (e) => {
    var change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateForm(
      () => {
        if (this.isValidForm()) {
          this.props.dispatch(actionCreators.signup({
            email: this.state.email,
            password: this.state.password,
            confirm_password: this.state.confirm_password,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            locale: 'en' 
          }));
        }
      }
    )
  }

  validateForm = (callback) => {
    const email = this.state.email && this.state.email.length > 0 ? (validateEmail(this.state.email) ? '' : EMAIL_ERROR) : REQUIRED_ERROR;
    console.log(email);
    const password = this.state.password && this.state.email.length > 0 ? (validatePassword(this.state.password) ? '' : PASSWORD_ERROR) : REQUIRED_ERROR;
    console.log(password);
    const confirm_password = this.state.confirm_password && this.state.confirm_password.length > 0 ? (this.state.confirm_password !== this.state.password ? NOT_MATCHING_PASSWORDS_ERROR : '') : REQUIRED_ERROR;
    const first_name = this.state.first_name && this.state.first_name.length > 0 ? (validateOnlyLetters(this.state.first_name) ? '': ONLY_LETTERS_ERROR) : REQUIRED_ERROR;
    const last_name = this.state.last_name && this.state.last_name.length > 0 ? (validateOnlyLetters(this.state.last_name) ? '' : ONLY_LETTERS_ERROR) : REQUIRED_ERROR;;
    this.setState({ formErrors: {email, password, confirm_password, first_name, last_name} }, callback);
  }

  isValidForm = () => {
    const email = this.state.formErrors.email;
    const password = this.state.formErrors.password;
    const confirm_password = this.state.formErrors.confirm_password;
    const first_name = this.state.formErrors.first_name;
    const last_name = this.state.formErrors.last_name;
    return (
      !(email && email.length > 0) &&
      !(password && password.length > 0) &&
      !(confirm_password && confirm_password.length > 0) &&
      !(first_name && first_name.length > 0) &&
      !(last_name && last_name.length > 0)
    );
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (this.props.access_token.length > 0) {
      return (
        <Redirect to={from}/>
      )
    }

    console.log(this.state.formErrors);

    return (
      <div>
        <Signup
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          formErrors={this.state.formErrors}/>
      </div>
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
