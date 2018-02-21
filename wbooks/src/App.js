import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardContainer from './screens/dashboard/index';
import LoginContainer from './screens/login/index';
import routes from './config/routes';
import Authenticated from './utils/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path={routes.login()} component={LoginContainer} isPublic/>
          <Authenticated path={routes.dashboard()} component={DashboardContainer} isPrivate/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
