import { StyleSheet } from 'react-native';

import { black } from '../../utils/colors.js';

export const styles = StyleSheet.create({
  container: {
    width: 15,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: black,
    borderWidth: 1
  },
  check: {
    width: 10,
    height: 10,
    backgroundColor: black
  }
})
