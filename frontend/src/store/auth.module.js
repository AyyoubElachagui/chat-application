import AuthService from '../services/auth.service';
import { useToast } from 'vue-toastification'

const user = JSON.parse(localStorage.getItem('user'));


const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

  const toast = useToast()

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        data => {
          commit('loginSuccess', data.user);
          return Promise.resolve(data.user);
        },
        error => {
          commit('loginFailure');
          var errorMessage = error.response.data.message;
          if(errorMessage === "validation error"){
            toast.error(error.response.data.errors.email[0])
          }else{
            toast.error(error.response.data.message)
          }
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        data => {
          commit('registerSuccess', data.user);
          return Promise.resolve(data.user);
        },
        error => {
          commit('registerFailure');
          var errorMessage = error.response.data.message;
          if(errorMessage === "validation error"){
            toast.error(error.response.data.errors.email[0])
          }else{
            toast.error(error.response.data.message)
          }
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    }
  }
};
