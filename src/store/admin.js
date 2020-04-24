const admin = {
  namespaced: true, 
  state: {},
  mutations: {},
  actions: {},
  getters: {
    getOrdersByStatus: (state, getters, rootState) => status => {
      if (status === 'all') {
        return rootState.orders
      }

      if (status >= 0 && status <= 4) {
        return rootState.orders.filter(order => order.status == status)
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
    }
  }
}

export default admin