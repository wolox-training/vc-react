import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as books } from '../redux/books/reducer';
import { reducer as auth } from '../redux/auth/reducer';

const reducers = combineReducers({
  auth,
  books
});

export default function configureStore() {
    return createStore(
        reducers,
        composeWithDevTools(applyMiddleware(
            thunk
        ))
    );
}
