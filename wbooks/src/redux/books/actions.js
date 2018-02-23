
import BooksService from '../../services/BooksService';


export const GET_BOOK = 'GET_BOOK';
export const GET_BOOK_SUCCESS = 'GET_BOOK_SUCCESS';
export const GET_BOOK_ERROR = 'GET_BOOK_ERROR';
export const GET_BOOKS = 'GET_BOOKS';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_ERROR = 'GET_BOOKS_ERROR';
export const CHANGE_FILTERS = 'CHANGE_FILTERS';


export const actionCreators = {
  getBook(id) {
    return async dispatch => {
      dispatch({ type: GET_BOOK });
      BooksService.getBook(id)
        .then(response => {
          dispatch({ type: GET_BOOK_SUCCESS, payload: { book: response.data } });
        })
        .catch(() => {
          dispatch({ type: GET_BOOK_ERROR });
        });
    };
  },
  getBooks() {
    return async dispatch => {
      dispatch({ type: GET_BOOKS });
      BooksService.getBooks()
        .then(response => {
          dispatch({ type: GET_BOOKS_SUCCESS, payload: { books: response.data } });
        })
        .catch(() => {
          dispatch({ type: GET_BOOKS_ERROR });
        });
    };
  },
  changeFilters(filters) {
    return async dispatch => {
      dispatch({ type: CHANGE_FILTERS, payload: { filters } });
    }
  }
}
