import axios from 'axios';
import userService from './user.service';

const API_URL = 'http://localhost:8000/api/'

class AuthService {
  login(user) {
    return axios
            .post(API_URL + 'login', {
                email: user.email,
                password: user.password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
  }

  logout() {
    userService.logout();
    localStorage.removeItem('user');
  }


  register(user) {
    return axios.post(API_URL + 'register', {
      name: user.username,
      email: user.email,
      password: user.password
    })
    .then(response => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
  }
}

export default new AuthService();
