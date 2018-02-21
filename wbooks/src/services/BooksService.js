
import api from '../config/api';

const getBook = id => api.get(`/books/${id}`);

const getBooks = params => api.get('/books');

const BooksService = {
  getBook,
  getBooks
};

export default BooksService;
