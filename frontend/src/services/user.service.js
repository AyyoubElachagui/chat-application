import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/api/'

class UserService {
  getAllUsers() {
    return axios.get(API_URL + 'users', { headers: authHeader() })
    .then(res => {
      return res.data.data
    });
  }

  logout() {
    return axios.post(API_URL + 'logout', { headers: authHeader() });
  }

  getRecepients() {
    return axios.get(API_URL + 'recepients', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
