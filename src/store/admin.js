const admin = {
  namespaced: true, 
  state: {
    pets: [],
    orders: [],
    users: []
  },
  mutations: {
    setNewStatus(test, test1, test2) {
      console.log(test)
      console.log(test1)
      console.log(test2)
    },
    setPets(state, payload) {
      state.pets = [...state.pets, payload]
    },
    setOrders(state, payload) {

    },
    setStateFromRoot(state, {pets, orders, users}) {
      state.pets = [...pets]
      state.orders = [...orders]
      state.users = [...users]
      console.log(state)
    }
  },
  actions: {
    fillState({commit, getters}) {
      const payload = {}
      payload.pets = [...getters.getPets]
      payload.orders = [...getters.getOrders]
      payload.users = [...getters.getUsers]
      commit('setStateFromRoot', payload)
    }
  },
  getters: {
    getOrdersByStatus: (state) => status => {
      if (status === 'all') {
        return state.orders
      }

      if (status >= 0 && status <= 4) {
        return state.orders.filter(order => order.status == status)
      }

    },
    getOrderAddress: (state, getters, rootState) => id => {
      const pet = rootState.pets.filter(pet => pet.id == id)
      const user = rootState.users.filter(user => user.id == pet[0].user_id)
      return user[0].address
    },
    getPetInfo: (state, getters, rootState) => id => {
      return rootState.pets.filter(pet => pet.id == id)[0]
    },
    getUserInfo: (state, getters, rootState) => id => {
      return rootState.users.filter(user => user.id == id)[0]
    },
    getPets(state, getters, rootState) {
      return rootState.pets
    },
    getOrders(state, getters, rootState) {
      return rootState.orders
    },
    getUsers(state, getters, rootState) {
      return rootState.users
    }
  }
}

export default admin