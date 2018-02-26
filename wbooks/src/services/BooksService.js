
import api from '../config/api';

const getBook = async id => api.get(`/books/${id}`);

const getBooks = async params => api.get('/books');

const BooksService = {
  getBook,
  getBooks
};

export default BooksService;
