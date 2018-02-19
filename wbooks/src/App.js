import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomeContainer from './screens/home/index';
import BookDetailContainer from './screens/book-detail/index';
import LoginContainer from './screens/login/index';
import routes from './config/routes';
import PrivateRoute from './utils/PrivateRoute';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

class App extends Component {
  render() {
    const store = configureStore();
    return (
      <div>
        <Provider store={store}>
          <Switch>
            <Redirect exact from={routes.home()} to='/dashboard'/>
            <PrivateRoute exact path={routes.dashboard()} component={HomeContainer}/>
            <PrivateRoute path={routes.books(':number')} component={BookDetailContainer}/>
            <Route exact path={routes.login()} component={LoginContainer}/>
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default App;
