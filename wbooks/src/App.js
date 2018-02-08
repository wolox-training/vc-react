import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HeaderContainer from './components/header/index.js'
import HomeContainer from './screens/home/index';
import BookDetailContainer from './screens/book-detail/index';
import routes from './config/routes';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Switch>
          <Redirect exact from={routes.home()} to='/dashboard'/>
          <Route exact path={routes.dashboard()} component={HomeContainer}/>
          <Route path={routes.detail(':number')} component={BookDetailContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
