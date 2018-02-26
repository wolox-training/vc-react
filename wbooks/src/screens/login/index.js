import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Login from './layout';
import { REQUIRED_ERROR, EMAIL_ERROR, PASSWORD_ERROR } from './strings';
import { validateEmail, validatePassword } from '../../utils/Validator';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/auth/actions';
import routes from '../../config';

class LoginContainer extends Component {
  state = {
    formErrors: {email: '', password: ''}
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateForm(
      () => {
        if (this.isValidForm()) {
          this.props.dispatch(actionCreators.login(this.state.email, this.state.password));
        }
      }
    )
  }

  validateForm = (callback) => {
    const email = this.state.email && this.state.email.length > 0 ? (validateEmail(this.state.email) ? '' : EMAIL_ERROR) : REQUIRED_ERROR;
    const password = this.state.password && this.state.email.length > 0 ? (validatePassword(this.state.password) ? '' : PASSWORD_ERROR) : REQUIRED_ERROR;
    this.setState({ formErrors: {email, password} }, callback);
  }

  isValidForm = () => {
    const email = this.state.formErrors.email;
    const password = this.state.formErrors.email;
    return  !(email && email.length > 0) &&  !(password && password.length > 0);
  }

  render() {

    const { from } = this.props.location.state || { from: { pathname: routes.dashboard() } }

    if (this.props.access_token.length > 0) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <Login
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

export default connect(mapStateToProps)(LoginContainer);
