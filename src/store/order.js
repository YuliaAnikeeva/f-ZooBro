import baseURL from './baseURL'

const order = {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    setOrdersList (state, payload) {
      state.list = payload
    },
  },
  actions: {
    fetchOrdersList ({commit, getters, rootGetters}, payload = {}) {
      return fetch(`${baseURL}/v1/orders`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          ...rootGetters.userToken && {"Authorization": rootGetters.userToken}
        }
      })
      .then(json => {
        if (json.status === 1) {
          const { data } = json
          console.log('fetchOrdersList', data)
          commit('setOrdersList', data)
          return true
        } else {
          const { message } = json
          console.error(message)
          commit('clearSnackbar', null , { root: true })
          commit('setSnackbarMsg', message, { root: true })
          commit('setSnackbarType', 'error', { root: true })
          return false
        }
      })
      .catch(error => {
        console.error('Ошибка получения списка заказов', error)
        commit('clearSnackbar', null, { root: true })
        commit('setSnackbarMsg', 'Ошибка получения списка заказов', { root: true })
        commit('setSnackbarType', 'error', { root: true })
        return false
      })
    },
    createOrder ({commit, getters, rootGetters}, payload) {
      return fetch(`${baseURL}/v1/orders/create`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          ...rootGetters.userToken && {"Authorization": rootGetters.userToken}
        },
        body: JSON.stringify(payload)
      })
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(json => {
        if (json.status === 1) {
          const { data } = json
          console.log('createOrder', data)
          return true
        } else {
          const { message } = json
          console.error(message)
          commit('clearSnackbar', null , { root: true })
          commit('setSnackbarMsg', message, { root: true })
          commit('setSnackbarType', 'error', { root: true })
          return false
        }
      })
      .catch(error => {
        console.error('Ошибка создания заказа', error)
        commit('clearSnackbar', null, { root: true })
        commit('setSnackbarMsg', 'Не удалось отправить заказ', { root: true })
        commit('setSnackbarType', 'error', { root: true })
        return false
      })
    },
  },
  getters: {
    getOrdersList (state) {
      return state.list
    },
  }
}

export default order
