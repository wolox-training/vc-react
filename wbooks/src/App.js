import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomeContainer from './screens/home/index';
import BookDetailContainer from './screens/book-detail/index';
import LoginContainer from './screens/login/index';
import routes from './config/routes';
import PrivateRoute from './utils/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Redirect exact from={routes.home()} to='/dashboard'/>
          <PrivateRoute exact path={routes.dashboard()} component={HomeContainer}/>
          <PrivateRoute path={routes.books(':number')} component={BookDetailContainer}/>
          <Route exact path={routes.login()} component={LoginContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
