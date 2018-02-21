import Immutable from 'seamless-immutable';
import PropTypes from 'prop-types';

import { actions } from './actions';
import { BookPropType } from '../../consts/propTypes';

const initialState = {
    loading: false,
    books: [],
    filters: {
      filterType: '',
      filterData: ''
    },
    book: {
      id: '',
      author: '',
      title: '',
      genre: '',
      publisher: '',
      year: ''
    }
}


export function reducer(state = Immutable(initialState), action) {
  switch(action.type) {
    case actions.GET_BOOK: {
      return state.merge({ loading: true });
    }
    case actions.GET_BOOK_SUCCESS: {
      return state.merge({ loading: false, student: action.payload.book });
    }
    case actions.GET_BOOK_ERROR: {
      return state.merge({ loading: false });
    }
    case actions.GET_BOOKS: {
      return state.merge({ loading: true });
    }
    case actions.GET_BOOKS_SUCCESS: {
      return state.merge({ loading: false, students: action.payload.books });
    }
    case actions.GET_BOOKS_ERROR: {
      return state.merge({ loading: false });
    }
    case action.CHANGE_FILTERS: {
      return state.merge({ loading: false, filters: action.payload.filters });
    }
    default: {
      return state;
    }
  }
}

const book = BookPropType;

export const propTypes = {
  book,
  books: PropTypes.arrayOf(book),
  filters: {
    filterType: PropTypes.string,
    filterData: PropTypes.string
  }

};
