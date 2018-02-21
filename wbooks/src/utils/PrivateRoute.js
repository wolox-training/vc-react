import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import fakeAuth from './FakeAuth';
import routes from '../config/routes';

const Authenticated = ({ component: Component, isPublic, isPrivate,...rest }) => {

  const isAuthenticated = fakeAuth.isAuthenticated;
  if (isPrivate && !isAuthenticated) {
    return <Redirect to={{ pathname: routes.login() }} />
  } else if (isPublic && isAuthenticated) {
    return <Redirect to={{ pathname: routes.home() }} />;
  } else {
    return <Route {...rest} render={props => (
        <Component {...props}/>
    )}/>;
  }
};

export default Authenticated;
