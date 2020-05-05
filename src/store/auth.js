import baseURL from './baseURL'

export default {
  state: {
    userToken: null,
  },
  mutations: {
    setUser (state, payload) {
      state.userToken = payload
      localStorage.setItem('userToken', payload)
    },
    setUserHeader (state, payload) {
      //const Authorization = payload.headers.get('Authorization')
      const Authorization = payload.Authorization
      if (Authorization) {
        state.userToken = Authorization
        localStorage.setItem('userToken', Authorization)
      }
    },
    setUserLogin (state, payload) {
      state.login = payload
    },
    setUserPassword (state, payload) {
      state.password = payload
    },
  },
  actions: {
    async loginUser ({ commit }, payload) {
      commit('setLoading', true)
      return fetch(`${baseURL}/v1/user/auth`,
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
              commit('setUserHeader', data)
              console.log('Успешная авторизация', data)
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
            console.error('Ошибка авторизации', error)
            return false
          }
        )
    },
    autoLoginUser ({ commit }, payload) {
      console.log('==================== autoLoginUser ====================')
      commit('setUser', payload)
      localStorage.setItem('userToken', payload)
    },
    async logoutUser ({ commit, getters }, payload) {
      commit('setUser', null)
      localStorage.removeItem('userToken')
    },
  },
  getters: {
    userToken (state) {
      return state.userToken
    },
    isUserLoggedIn (state) {
      return state.userToken !== null
    },
  }
}
