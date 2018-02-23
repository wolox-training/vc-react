import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { reducer as books } from '../redux/books/reducer';
import { reducer as auth } from '../redux/auth/reducer';

const reducers = combineReducers({
  auth,
  books
});

export default function configureStore() {
    return createStore(
        reducers,
        applyMiddleware(thunk)
    );
}
