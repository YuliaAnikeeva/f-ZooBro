import baseURL from './baseURL'

export default {
  state: {
    name: null,
    email: null,
    is_admin: null,
    phone: null,
  },
  mutations: {
    setUserInfo (state, payload) {
      let { name, email, is_admin, phone } = payload
      state.name = name
      state.email = email
      state.is_admin = is_admin
      state.phone = phone
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
    async fetchUserInfo ({ commit, getters }, payload) {
      return fetch(`${baseURL}/v1/user`,
        {
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Authorization': getters.userToken,
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
              commit('setUserHeader', data)
              console.log('fetchUserInfo', data)
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
            console.error('Ошибка получения пользовательских данных', error)
            return false
          }
        )
    },
    async userUpdate ({ commit, getters }, payload) {
      return fetch(`${baseURL}/v1/user/update`,
        {
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Authorization': getters.userToken,
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
              return false
            }
          }
        )
        .catch(
          error => {
            console.error('Ошибка обновления пользовательских данных', error)
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
              // обновить локальные данные если усе успешно
              commit('setUserHeader', data)
              commit('clearSnackbar')
              commit('setSnackbarMsg', 'Успешная регситрация')
              commit('setSnackbarType', 'success')
              console.log('Успешная регситрация', data)
              return true
            } else {
              const { message } = json
              commit('clearSnackbar')
              commit('setSnackbarMsg', json.message)
              commit('setSnackbarType', 'error')
              console.error(message)
              return false
            }
          }
        )
        .catch(
          error => {
            console.error('Ошибка регситрации пользователя', error)
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
  }
}
