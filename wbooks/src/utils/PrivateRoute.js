import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import fakeAuth from './FakeAuth';
import routes from '../config/routes';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: routes.login(),
        state: { from: props.location }
      }}/>
    )
  )}/>
);

export default PrivateRoute;
