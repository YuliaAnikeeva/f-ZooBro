const admin = {
  namespaced: true, 
  state: {},
  mutations: {},
  actions: {},
  getters: {
    getOrderAddress: (state, getters, rootState) => id => {
      console.log(rootState)
      console.log(id)
      return id
    }
  }
}

export default admin