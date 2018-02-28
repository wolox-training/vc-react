import { StyleSheet } from 'react-native';
import { lightGray } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  checkedContainer: {
    backgroundColor: lightGray
  },
  actionsContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})
