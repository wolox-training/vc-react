import { create } from 'apisauce';
import StorageAuth from '../utils/StorageAuth';

const api = create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1',
  timeout: 5000
});

if (StorageAuth.isAuthenticated) {
  api.setHeader('Authorization', StorageAuth.getAccessToken());
}

export default api;
