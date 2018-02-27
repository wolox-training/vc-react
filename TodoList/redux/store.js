import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as todo } from './todo/reducer';

const reducers = combineReducers({
  todo
});

export default function configureStore() {
    return createStore(
        reducers,
        composeWithDevTools(applyMiddleware(
            thunk
        ))
    );
}