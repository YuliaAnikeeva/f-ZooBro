import baseURL from './baseURL'
import createFetch from './createFetch'

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
    fetchOrdersList ({commit, rootGetters}) {
      return createFetch({
        route: '/v1/orders',
        method: 'GET',
        ...rootGetters.userToken && {token : rootGetters.userToken}
      })
      .then(json => {
        console.log('fetchOrdersList', json)
        if (json.status) {
          const { data } = json
          commit('setOrdersList', data.orders)
          return true
        } else {
          const { message } = json
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
    createOrder ({commit, rootGetters}, payload) {
      return createFetch({
        route: '/v1/orders/create',
        method: 'POST',
        ...rootGetters.userToken && {token : rootGetters.userToken}
      }, payload)
      .then(({status, payload}) => {
        console.log('createOrder', {status, payload})
        if (status) {
          return true
        } else {
          commit('clearSnackbar', null , { root: true })
          commit('setSnackbarMsg', payload, { root: true })
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
