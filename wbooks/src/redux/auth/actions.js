import { stringArrayToObject } from '../../utils/ReduxUtils';
import AuthService from '../../services/AuthService';
import StorageAuth from '../../utils/StorageAuth';

export const actions = stringArrayToObject([
  'LOGIN',
  'LOGIN_SUCCESS',
  'LOGIN_ERROR',
  'SIGNUP',
  'SIGNUP_SUCCESS',
  'SIGNUP_ERROR',
  'LOGOUT'
]);

export const actionCreators =  {
  login(email, password) {
    return async dispatch => {
      dispatch({ type: actions.LOGIN });
      AuthService.login(email, password)
        .then(response => {
          AuthService.setAuthHeader(response.data.access_token);
          StorageAuth.authenticate(response.data.access_token, response.data.renew_id);
          dispatch(
            {
              type: actions.LOGIN_SUCCESS, 
              payload: { access_token: response.data.access_token, renew_id: response.data.renew_id }
            }
          );
        })
        .catch(() => {
          dispatch({ type: actions.LOGIN_ERROR });
        });
    };
  },
  signup(email, password, confirmPassword, firstName, lastName) {
    return async dispatch => {
      dispatch({ type: actions.SIGNUP });
      AuthService.signup(email, password, confirmPassword, firstName, lastName)
        .then(response => {
          AuthService.setAuthHeader(response.data.access_token);
          StorageAuth.authenticate(response.data.access_token, response.data.renew_id);
          dispatch(
            {
              type: actions.SIGNUP_SUCCESS, 
              payload: { access_token: response.data.access_token, renew_id: response.data.renew_id }
            }
          );
        })
        .catch(() => {
          dispatch({ type: actions.SIGNUP_ERROR });
        });
    };
  },
  logout() {
    return async dispatch => {
      dispatch({ type: actions.LOGOUT });
      StorageAuth.logout();
    };
  }
  
}