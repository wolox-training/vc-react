import Immutable from 'seamless-immutable';
import PropTypes from 'prop-types';

import { GET_BOOK, GET_BOOK_SUCCESS, GET_BOOK_ERROR, GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_ERROR, CHANGE_FILTERS } from './actions';

const initialState = {
    loading: false,
    books: [],
    filters: {
      filterType: '',
      filterData: ''
    },
    book: {
      id: 0,
      author: '',
      title: '',
      genre: '',
      publisher: '',
      year: ''
    }
}

export const reducer = (state = Immutable(initialState), action) => {
  switch(action.type) {
    case GET_BOOK: {
      return state.merge({ loading: true });
    }
    case GET_BOOK_SUCCESS: {
      return state.merge({ loading: false, book: action.payload.book });
    }
    case GET_BOOK_ERROR: {
      return state.merge({ loading: false });
    }
    case GET_BOOKS: {
      return state.merge({ loading: true });
    }
    case GET_BOOKS_SUCCESS: {
      return state.merge({ loading: false, books: action.payload.books });
    }
    case GET_BOOKS_ERROR: {
      return state.merge({ loading: false });
    }
    case CHANGE_FILTERS: {
      return state.merge({ loading: false, filters: action.payload.filters });
    }
    default: {
      return state;
    }
  }
}

const book = PropTypes.shape({
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  image_url: PropTypes.string
});

export const propTypes = {
  book,
  books: PropTypes.arrayOf(book),
  filters: {
    filterType: PropTypes.string,
    filterData: PropTypes.string
  }

};
