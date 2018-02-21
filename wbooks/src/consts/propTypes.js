import PropTypes from 'prop-types';

export const BookPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  image_url: PropTypes.string
});
