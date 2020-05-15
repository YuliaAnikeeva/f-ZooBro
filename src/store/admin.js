import createFetch from './createFetch'

const admin = {
  namespaced: true,
  state: {
    pets: [],
    orders: [],
    users: []
  },
  mutations: {
    setStateFromRoot(state, { pets, orders, users }) {
      state.pets = [...pets];
      state.orders = [...orders];
      state.users = [...users];
    }
  },
  actions: {
    fillState({ commit, getters }) {
      const payload = {};
      payload.pets = [...getters.getPets];
      payload.orders = [...getters.getOrders];
      payload.users = [...getters.getUsers];
      commit("setStateFromRoot", payload);
    },
    async fetchOrders({ commit, rootGetters }, payload) {
      const fetchData = {
        token: rootGetters.token,
        method: 'GET',
        route: '/v1/orders-admin'
      }
      createFetch(fetchData)
        .then(res => console.log(res));
    }
  },
  getters: {
    getOrdersByStatus: state => status => {
      if (status === "all") {
        return state.orders;
      }

      if (status >= 0 && status <= 4) {
        return state.orders.filter(order => order.status == status);
      }
    },
    getOrderAddress: (state, getters, rootState) => id => {
      const pet = rootState.pets.filter(pet => pet.id == id);
      const user = rootState.users.filter(user => user.id == pet[0].user_id);
      return user[0].address;
    },
    getPetInfo: (state, getters, rootState) => id => {
      return rootState.pets.filter(pet => pet.id == id)[0];
    },
    getUserInfo: (state, getters, rootState) => id => {
      return rootState.users.filter(user => user.id == id)[0];
    },
    getPets(state, getters, rootState) {
      return rootState.pets;
    },
    getOrders(state, getters, rootState) {
      return rootState.orders;
    },
    getUsers(state, getters, rootState) {
      return rootState.users;
    }
  }
};

export default admin;
