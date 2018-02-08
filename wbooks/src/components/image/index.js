import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Image from './layout';

class ImageContainer extends Component {
  render() {
    return (
      <Image 
        bookId={this.props.bookId}
        image_url={this.props.image_url}
        image_size={this.props.image_size}
      />
    );
  }
}

ImageContainer.propTypes = {
  bookId: PropTypes.number.isRequired,
  image_url: PropTypes.string,
  image_size: PropTypes.string.isRequired
};

export default ImageContainer;
