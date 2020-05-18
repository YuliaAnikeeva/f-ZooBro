import createFetch from './createFetch'

const admin = {
  namespaced: true,
  state: {
    pets: [],
    orders: [],
    users: [],
    errorMsg: '',
  },
  mutations: {
    setStateFromRoot(state, { pets, orders, users }) {
      state.pets = [...pets];
      state.orders = [...orders];
      state.users = [...users];
    },
    fillStateFromFetch(state, {orders}) {
      console.log(orders)
      state.orders = orders;
    },
    saveErrorMsg(state, payload) {
      state.errorMsg = payload;
    }
  },
  actions: {
    async fetchOrders({ commit, rootGetters }, payload) {
      let route = false

      if (payload) {
        route = `/v1/orders-admin?expand=pet,status,user&status_id=${payload}`
      }

      const fetchData = {
        token: rootGetters.token,
        method: 'GET',
        route: route ? route : '/v1/orders-admin?expand=pet,status,user'
      }

      createFetch(fetchData)
        .then(res => {
          if (!res.status) {
            commit('saveErrorMsg', res.message)
          }

          if (res.status) {
            commit('fillStateFromFetch', res.data)
          }
          
          return res.status
        });
    },
    async updateOrder({ commit, rootGetters }, payload) {
      const fetchData = {
        token: rootGetters.token,
        method: 'POST',
        route: '/v1/orders/update'
      }

      return createFetch(fetchData, payload)
        .then(res => {
          if (!res.status) {
            commit('saveErrorMsg', res.message)
          }
          return res.status
        })
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
    getOrders (state) {
      return state.orders
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
    // getOrders(state, getters, rootState) {
    //   return rootState.orders;
    // },
    getUsers(state, getters, rootState) {
      return rootState.users;
    }
  }
};

export default admin;
