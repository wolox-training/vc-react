import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Login from './layout';
import { REQUIRED_ERROR, EMAIL_ERROR, PASSWORD_ERROR } from './strings';
import { validateEmail, validatePassword } from '../../utils/Validator';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/auth/actions';

class LoginContainer extends Component {
  state = {
    formErrors: {email: '', password: ''}
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
          this.props.dispatch(actionCreators.login({email: this.state.email, password: this.state.password}));
        }
      }
    )
  }

  validateForm = (callback) => {
    const email = this.state.email && this.state.email.length > 0 ? (validateEmail(this.state.email) ? '' : EMAIL_ERROR) : REQUIRED_ERROR;
    console.log(email);
    const password = this.state.password && this.state.email.length > 0 ? (validatePassword(this.state.password) ? '' : PASSWORD_ERROR) : REQUIRED_ERROR;
    console.log(password);
    this.setState({ formErrors: {email, password} }, callback);
  }

  isValidForm = () => {
    const email = this.state.formErrors.email;
    const password = this.state.formErrors.email;
    return  !(email && email.length > 0) &&  !(password && password.length > 0);
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (this.props.access_token.length > 0) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <Login
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

export default connect(mapStateToProps)(LoginContainer);
