import { StyleSheet } from 'react-native';
import { lightGray, blue } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%'
  },
  content: {
    flexGrow: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: lightGray
  }
})
