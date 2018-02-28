/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/store';
import Navigator from './screens';

type Props = {};
const store = configureStore();
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={ store }>
        <Navigator />
      </Provider>
    );
  }
}
