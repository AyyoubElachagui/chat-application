import UserService from "../services/user.service"

export const user = {
    namespaced: true,
    state: {

    },
    actions: {
        recepients(){
          UserService.getRecepients()
        }
    },
    mutations: {

    }
}