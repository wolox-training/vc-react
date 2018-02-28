import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';

import * as Routes from './utils/routes';
import TodoViewContainer from './screens/Todo';
import BooksViewContainer from './screens/Books';

import {
  NavigationOptions,
  TabNavigatorOptions
} from './navigation/navigationOptions';

const HomeTabNavigatorScreen = TabNavigator(
  {
    [Routes.Todo]: { screen: TodoViewContainer, navigationOptions: NavigationOptions.todo() },
    [Routes.Books]: { screen: BooksViewContainer, navigationOptions: NavigationOptions.books() }
  },
  TabNavigatorOptions
);

export default StackNavigator({
  Home: {
    screen: HomeTabNavigatorScreen,
    navigationOptions: NavigationOptions.home()
  }
});