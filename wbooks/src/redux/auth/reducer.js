import Immutable from 'seamless-immutable';

import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR, LOGOUT } from './actions';

const initialState = {
  access_token: '',
  renew_id: '',
  loading: false
}

export const reducer = (state=Immutable(initialState), action) => {
  switch(action.type) {
    case LOGIN:
      return state.merge({loading: true});
    case LOGIN_SUCCESS:
      return state.merge({loading: false, access_token: action.payload.access_token, renew_id: action.payload.renew_id});
    case LOGIN_ERROR:
      return state.merge({loading: false});
    case SIGNUP:
      return state.merge({loading: true});
    case SIGNUP_SUCCESS:
      return state.merge({loading: false, access_token: action.payload.access_token, renew_id: action.payload.renew_id});
    case SIGNUP_ERROR:
      return state.merge({loading:false});
    case LOGOUT:
      return state.merge({access_token: '', renew_id: ''});
    default:
      return state;
  }
}