import { blue, black, gray, white } from '../utils/colors';

export const NavigationOptions = {
  home: () => ({
    header: null
  }),
  todo: () => ({
    header: null
  }),
  books: () => ({
    header: null
  }),
  bookDetail: (title) => ({
    tabBarLabel: title
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
