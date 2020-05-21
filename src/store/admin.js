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
        route = `/v1/orders-admin?sort=-id&expand=pet,status,user&status_id=${payload}`
      }

      const fetchData = {
        token: rootGetters.token,
        method: 'GET',
        route: route ? route : '/v1/orders-admin?sort=-id&expand=pet,status,user'
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
  }
};

export default admin;
