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
            }
          )
        },
        addNewMessage({commit}, message){
          UserService.addNewMessage(message).then(
            messages => {
              commit('getAllMessages', messages);
              return Promise.resolve(messages);
            }
          )
        },
        loadAllMessages({commit}){
          UserService.loadAllMessages().then(
            messages => {
              commit('getAllMessages', messages);
              return Promise.resolve(messages);
            }
          )
        }
    },
    mutations: {
      getUsersSuccess(state, users){
        state.users = users
      },
      getAllMessages(state, messages){
        state.messages.splice(0)
        state.messages.push(messages)
      },
      addNewMessageToList(state, messages){
        state.messages.push(messages)
      }
    }
}