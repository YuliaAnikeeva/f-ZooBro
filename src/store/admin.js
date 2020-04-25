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
      console.log(rootState)
      console.log(id)
      return id
    }
  }
}

export default admin