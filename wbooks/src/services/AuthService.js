
import api from '../config/api';

const login = (email, password) => api.post('/users/sessions', {email, password});
const signup = user => api.post('/users', {user});
const setAuthHeader = access_token => api.setHeader('Authorization', access_token);

const AuthService = {
  login,
  signup,
  setAuthHeader
};

export default AuthService;
