import Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  access_token: '',
  renew_id: '',
  loading: false
}

export const reducer = (state=Immutable(initialState), action) => {
  switch(actions.type) {
    case actions.LOGIN:
      return state.merge({loading: true});
    case actions.LOGIN_SUCCESS:
      return state.merge({loading: false, access_token: action.payload.access_token, renew_id: action.payload.renew_id});
    case actions.LOGIN_ERROR:
      return state.merge({loading: false});
    case actions.SIGNUP:
      return state.merge({loading: true});
    case actions.SIGNUP_SUCCESS:
      return state.merge({loading: false, access_token: action.payload.access_token, renew_id: action.payload.renew_id});
    case actions.SIGNUP_ERROR:
      return state.merge({loading:false, access_token: action.payload.access_token, renew_id: action.payload.renew_id});
    case actions.LOGOUT:
      return state.merge({access_token: '', renew_id: ''});
    default:
      return state;
  }
}