import { blue, black, gray, white } from '../utils/colors';

export const NavigationOptions = {
  home: () => ({
    header: null
  }),
  todo: () => ({
    tabBarLabel: 'todo'.toUpperCase()
  }),
  books: () => ({
    tabBarLabel: 'books'.toUpperCase()
  }),
  bookDetail: () => ({
    header: null
  })
};

export const TabNavigatorOptions = {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    style: {
      backgroundColor: gray,
      paddingVertical: 10
    },
    indicatorStyle: { backgroundColor: blue },
    activeTintColor: blue,
    inactiveTintColor: white
  }
};
