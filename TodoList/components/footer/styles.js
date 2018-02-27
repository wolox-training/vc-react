import { StyleSheet } from 'react-native';

import { red, lightGray } from '../../consts/colors.js';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGray,
    marginTop: 20,
    padding: 5
  },
  text: {
    color: red,
    textAlign: 'center',
    borderTopWidth: 1,
    borderColor: lightGray,
    padding: 8
  }
})
