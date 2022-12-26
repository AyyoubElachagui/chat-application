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
                  this.storageAddItems(response.data)
                }
                return response.data;
            });
  }

  logout() {
    userService.logout();
    this.storageRemoveItems();
  }


  register(user) {
    return axios.post(API_URL + 'register', {
      name: user.name,
      email: user.email,
      password: user.password
    })
    .then(response => {
      if (response.data.token) {
        this.storageAddItems(response.data)
      }

      return response.data;
    });
  }

  storageAddItems(data){

    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', JSON.stringify(data.token));
  }

  storageRemoveItems(){
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

}

export default new AuthService();
