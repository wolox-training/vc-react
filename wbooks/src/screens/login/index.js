import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import Login from './layout';
import fakeAuth from '../../utils/FakeAuth';
import { REQUIRED_ERROR, EMAIL_ERROR, PASSWORD_ERROR } from './strings';
import { validateEmail, validatePassword } from '../../utils/Validator';

class LoginContainer extends Component {
  state = {
    redirectToReferrer: fakeAuth.isAuthenticated,
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
          axios({
            method:'post',
            url: 'https://wbooks-api-stage.herokuapp.com/api/v1/users/sessions',
            data: {
              email: this.state.email,
              password: this.state.password
            }
          })
          .then((response) => {
            console.log(response.status);
            this.login(response.data.access_token, response.data.renew_id);
            axios.defaults.headers.common['Authorization'] = response.data.access_token;
          })
          .catch((error) => {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              this.setState({ formErrors: {password: 'Usuario o contraseña incorrecta', email:''} });
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
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

  login = (access_token, renew_id) => {
    fakeAuth.authenticate(access_token, renew_id, () => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
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

export default LoginContainer;
