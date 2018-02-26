import AuthService from '../../services/AuthService';
import StorageAuth from '../../utils/StorageAuth';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const LOGOUT = 'LOGOUT';

export const actionCreators =  {
  login(email, password) {
    return async dispatch => {
      dispatch({ type: LOGIN });
      const response = await AuthService.login(email, password);
      if(!response.ok) {
        dispatch({ type: LOGIN_ERROR });
        return;
      }
      AuthService.setAuthHeader(response.data.access_token);
      StorageAuth.authenticate(response.data.access_token, response.data.renew_id);
      dispatch(
        {
          type: LOGIN_SUCCESS, 
          payload: { access_token: response.data.access_token, renew_id: response.data.renew_id }
        }
      );
    };
  },
  signup(email, password, confirmPassword, firstName, lastName) {
    return async dispatch => {
      dispatch({ type: SIGNUP });
      const response = await AuthService.signup(email, password, confirmPassword, firstName, lastName)
      if(!response.ok) {
        dispatch({ type: SIGNUP_ERROR });
        return;
      }
      AuthService.setAuthHeader(response.data.access_token);
      StorageAuth.authenticate(response.data.access_token, response.data.renew_id);
      dispatch(
        {
          type: SIGNUP_SUCCESS, 
          payload: { access_token: response.data.access_token, renew_id: response.data.renew_id }
        }
      );
    };
  },
  logout() {
    return async dispatch => {
      dispatch({ type: LOGOUT });
      StorageAuth.logout();
    };
  }
  
}