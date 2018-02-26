
import api from '../config/api';

const login = async (email, password) => api.post('/users/sessions', {email, password});
const signup = async user => api.post('/users', {user});
const setAuthHeader = async access_token => api.setHeader('Authorization', access_token);

const AuthService = {
  login,
  signup,
  setAuthHeader
};

export default AuthService;
