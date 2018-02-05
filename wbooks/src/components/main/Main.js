import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './../home/Home';
import BookDetail from './../book-detail/BookDetail';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Redirect exact from='/' to='/dashboard'/>
          <Route exact path='/dashboard' component={Home}/>
          <Route path='/books/:number' component={BookDetail}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
