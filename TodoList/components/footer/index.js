import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> {this.props.text} </Text>
      </View>
    );
  }
}

Footer.propTypes = {
  text: PropTypes.string.isRequired
}
