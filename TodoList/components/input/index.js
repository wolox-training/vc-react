import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

import { gray } from '../../utils/colors';
import { styles } from './styles';

export default class Input extends Component {
  render() {
    return (
      <TextInput
        style={styles.input} 
        onChangeText={this.props.handleChange}
        placeholder={this.props.placeholder}
        placeholderTextColor={gray}
      />
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}