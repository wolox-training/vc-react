import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

class Title extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.props.text}
        </Text> 
      </View>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title;

