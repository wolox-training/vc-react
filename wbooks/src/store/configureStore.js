import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { reducer as books } from '../redux/books/reducer';

const reducers = combineReducers({
  books
});

export default function configureStore() {
    return createStore(
        reducers,
        applyMiddleware(thunk)
    );
}
