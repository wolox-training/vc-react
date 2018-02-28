import React, { Component} from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

class CheckBox extends Component {
  render() {
    if (this.props.isChecked) {
      return (
        <View style={styles.container}>
          <View style={styles.check} />
        </View>
      );
    }
    return (
      <View style={styles.container}></View>
    );
  }
}

CheckBox.propTypes = {
  isChecked: PropTypes.bool
}

export default CheckBox;
