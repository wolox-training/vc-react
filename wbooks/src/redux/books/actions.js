
import { stringArrayToObject } from '../../utils/ReduxUtils';
import BooksService from '../../services/BooksService';

export const actions = stringArrayToObject([
  'GET_BOOK',
  'GET_BOOK_SUCCESS',
  'GET_BOOK_ERROR',
  'GET_BOOKS',
  'GET_BOOKS_SUCCESS',
  'GET_BOOKS_ERROR',
  'CHANGE_FILTERS'
]);

export const actionCreators = {
  getBook(id) {
    return async dispatch => {
      dispatch({ type: actions.GET_BOOK });
      BooksService.getBook(id)
        .then(response => {
          dispatch({ type: actions.GET_BOOK_SUCCESS, payload: { book: response.data } });
        })
        .catch(() => {
          dispatch({ type: actions.GET_BOOK_ERROR });
        });
    };
  },
  getBooks() {
    return async dispatch => {
      dispatch({ type: actions.GET_BOOKS });
      BooksService.getStudents()
        .then(response => {
          dispatch({ type: actions.GET_BOOKS_SUCCESS, payload: { books: response.data } });
        })
        .catch(() => {
          dispatch({ type: actions.GET_BOOKS_ERROR });
        });
    };
  },
  changeFilters(filters) {
    return async dispatch => {
      dispatch({ type: actions.CHANGE_FILTERS, payload: { filters } });
    }
  }
}
