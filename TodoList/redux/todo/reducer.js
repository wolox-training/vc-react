import Immutable from 'seamless-immutable';
import PropTypes from 'prop-types';

import { ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM_COMPLETED, REMOVE_COMPLETED_ITEMS } from './actions';
import Data from '../../data/data';

const initialState = {
  items: Data
}

export const reducer = (state = Immutable(initialState), action) => {
  switch(action.type) {
    case ADD_ITEM: {
      return state.merge({ items: [...state.items, action.payload.item] });
    }
    case REMOVE_ITEM: {
      return state.merge({ items: state.items.filter(x => x !== action.payload.item) });
    }
    case TOGGLE_ITEM_COMPLETED: {
      return state.merge({ items: state.items.map( x => x === action.payload.item ? {name: action.payload.item.name, status: 'complete'} : x)})
    }
    case REMOVE_COMPLETED_ITEMS: {
      return state.merge({ items: state.items.filter(x => x.status !== 'complete') });
    }
    default: {
      return state;
    }
  }
}