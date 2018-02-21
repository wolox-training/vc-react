import React, { Component, Fragment } from 'react';import { Redirect, Route, Switch } from 'react-router-dom';

import HeaderContainer from '../../components/header/index';
import HomeContainer from '../home/index';
import BookDetailContainer from '../book-detail/index';
import routes from '../../config/routes';

class DashboardContainer extends Component {

  render() {
    return (
      <Fragment>
        <HeaderContainer />
        <Switch>
            <Redirect exact from={routes.dashboard()} to={routes.home()}/>
            <Route exact path={routes.home()} component={HomeContainer}/>
            <Route path={routes.books(':number')} component={BookDetailContainer}/>
          </Switch>
      </Fragment>
    );
  }

}

export default DashboardContainer;
