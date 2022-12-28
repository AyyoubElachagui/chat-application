import UserService from "../services/user.service"

export const user = {
    namespaced: true,
    state: {
      users: null,
      messages: []
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
        },
        addNewMessage({commit}, message){
          commit('addNewMessageToList', message);
          return Promise.resolve(message);
        }
    },
    mutations: {
      getUsersSuccess(state, users){
        state.users = users
      },
      addNewMessageToList(state, messages){
        state.messages.push(messages)
        console.log('old messages : ', state.messages)
        console.log('new messages : ', messages)
      }
    }
}