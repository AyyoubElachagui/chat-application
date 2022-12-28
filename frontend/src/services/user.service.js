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

  loadAllMessages() {
    return axios.get(API_URL + 'messages', { headers: authHeader() })
    .then(res => {
      return res.data.data
    });
  }

  addNewMessage(data) {
    return axios.post(API_URL + 'message', data, { headers: authHeader() })
    .then(res => {
      return res.data.data
    });
  }
}

export default new UserService();
