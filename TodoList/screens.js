import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';

import * as Routes from './utils/routes';
import TodoViewContainer from './screens/Todo';
import BooksViewContainer from './screens/Books';
import BooksDetailViewContainer from './screens/BookDetail';

import {
  NavigationOptions,
  TabNavigatorOptions
} from './navigation/navigationOptions';


const BooksNavigatorScreen = TabNavigator(
  {
    Todo: { screen: TodoViewContainer, navigationOptions: NavigationOptions.todo() },
    Books: { screen: BooksViewContainer, navigationOptions: NavigationOptions.books() }
  }, 
  TabNavigatorOptions
);

export default StackNavigator(
  {
    Home: { screen: BooksNavigatorScreen, navigationOptions: NavigationOptions.books() },
    BookDetail: { screen: BooksDetailViewContainer, navigationOptions: NavigationOptions.bookDetail() }
  }
);