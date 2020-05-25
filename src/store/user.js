import baseURL from './baseURL'

export default {
  namespaced: true,
  state: {
    name: null,
    email: null,
    is_admin: null,
    phone: null,
    address: null,
  },
  mutations: {
    setUserInfo (state, payload) {
      let { name, email, is_admin, phone, address } = payload
      state.name = name
      state.email = email
      state.is_admin = is_admin
      state.phone = phone
      state.address = address
    },
    setUserName (state, payload) {
      state.name = payload
    },
    setUserEmail (state, payload) {
      state.email = payload
    },
    setUserPhone (state, payload) {
      state.phone = payload
    },
    setUserIsAdmin (state, payload) {
      state.is_admin = payload
    },
  },
  actions: {
    async fetchUserInfo ({ commit, rootGetters }, payload) {
      return fetch(`${baseURL}/v1/user`,
        {
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Authorization': rootGetters.token,
          },
          method: 'GET',
        })
        .then(response => {
          return response.json()
        })
        .then(
          json => {
            if (json.status === 1) {
              const { data } = json
              commit('setUserInfo', data)
              console.log('fetchUserInfo', data)
              return true
            } else {
              const { message } = json
              console.error(message)
              commit('clearSnackbar')
              commit('setSnackbarMsg', message)
              commit('setSnackbarType', 'error')
              return false
            }
          }
        )
        .catch(
          error => {
            console.error('Ошибка получения пользовательских данных', error)
            commit('clearSnackbar', null, { root: true })
            commit('setSnackbarMsg', 'Не удалось получить данные', { root: true })
            commit('setSnackbarType', 'error', { root: true })
            return false
          }
        )
    },
    async userUpdate ({ commit, getters, rootGetters }, payload) {
      return fetch(`${baseURL}/v1/user/update`,
        {
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Authorization': rootGetters.token,
          },
          method: 'POST',
          body: JSON.stringify(payload)
        })
        .then(response => {
          return response.json()
        })
        .then(
          json => {
            if (json.status === 1) {
              const { data } = json
              // обновить локальные данные если усе успешно
              console.log('userUpdate', data)
              return true
            } else {
              const { message } = json
              console.error(message)
              commit('clearSnackbar')
              commit('setSnackbarMsg', message)
              commit('setSnackbarType', 'error')
              return false
            }
          }
        )
        .catch(
          error => {
            console.error('Ошибка обновления пользовательских данных', error)
            commit('clearSnackbar')
            commit('setSnackbarMsg', 'Не удалось обновить данные')
            commit('setSnackbarType', 'error')
            return false
          }
        )
    },
    async userRegister ({ commit, getters }, payload) {
      return fetch(`${baseURL}/v1/user/register`,
        {
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
          },
          method: 'POST',
          body: JSON.stringify(payload)
        })
        .then(response => {
          return response.json()
        })
        .then(
          json => {
            if (json.status === 1) {
              const { data } = json
              commit('clearSnackbar', null, { root: true })
              commit('setSnackbarMsg', 'Успешная регистрация', { root: true })
              commit('setSnackbarType', 'success', { root: true })
              console.log('Успешная регситрация', data)
              return true
            } else {
              const { message } = json
              commit('clearSnackbar', null, { root: true })
              commit('setSnackbarMsg', json.message, { root: true })
              commit('setSnackbarType', 'error', { root: true })
              console.error(message)
              return false
            }
          }
        )
        .catch(
          error => {
            console.error('Ошибка регистрации пользователя', error)
            commit('clearSnackbar', null, { root: true })
            commit('setSnackbarMsg', 'Что-то пошло не так...', { root: true })
            commit('setSnackbarType', 'error', { root: true })
            return false
          }
        )
    },

    async passwordRecovey ({ commit, getters }, payload) {
      return fetch(`${baseURL}/v1/user/recovery`,
        {
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
          },
          method: 'POST',
          body: JSON.stringify(payload)
        })
        .then(response => {
          return response.json()
        })
        .then(
          json => {
            if (json.status === 1) {
              const { data } = json
              // обновить локальные данные если усе успешно
              console.log('passwordRecovery', data)
              return true
            } else {
              const { message } = json
              console.error(message)
              return false
            }
          }
        )
        .catch(
          error => {
            console.error('Ошибка', error)
            return false
          }
        )
    },
  },
  getters: {
    userName (state) {
      return state.name
    },
    userEmail (state) {
      return state.email
    },
    userPhone (state) {
      return state.phone
    },
    userIsAdmin (state) {
      return state.is_admin
    },
    userInfo (state) {
      return {
        name: state.name,
        email: state.email,
        phone: state.phone,
        address: state.address,
      }
    }
  }
}
