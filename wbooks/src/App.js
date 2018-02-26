import React, { Component, Fragment } from 'react';
import { Switch } from 'react-router-dom';

import DashboardContainer from './screens/Dashboard';
import LoginContainer from './screens/Login';
import SignupContainer from './screens/Signup';
import routes from './config/routes';
import Authenticated from './utils/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Authenticated exact path={routes.login()} component={LoginContainer} isPublic/>
          <Authenticated exact path={routes.signup()} component={SignupContainer} isPublic/>
          <Authenticated path={routes.dashboard()} component={DashboardContainer} isPrivate/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
