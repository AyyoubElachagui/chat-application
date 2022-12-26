import { data } from "jquery"
import UserService from "../services/user.service"

export const user = {
    namespaced: true,
    state: {
      users: null
    },
    actions: {
        getAllUsers({commit}){
          UserService.getAllUsers().then(
            users => {
              commit('getUsersSuccess', users);
              return Promise.resolve(users);
            },
            error => {
              console.log(error)
            }
          )
        }
    },
    mutations: {
      getUsersSuccess(state, users){
        state.users = users
      }
    }
}