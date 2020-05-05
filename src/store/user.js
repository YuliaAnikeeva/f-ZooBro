export default {
  namespaced: true,
  state: {
    errorUserMessage: '',
    usersLoading: false,
    id: null,
    email: null,
    mobile: null
  },
  mutations: {
    setUserInfo (state, payload) {
      let { id, email, mobile } = state

      console.log(payload)
      id = payload.id
      email = payload.email
      mobile = payload.mobile
    },

    setUserLoading (state, payload) {
      state.usersLoading = payload
    },

    setErrorMessage (state, payload) {
      state.errorMessage = payload
    }
  },
  actions: {
    async fetchUserInfo ({ commit, getters }, payload) {
      commit('setUsersLoading', true)

      return await fetch({
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        url: 'http://zoobro-tmweb.ru/users'
      })
        .then(response => {
          return response.json()
        })
        .then(json => {
          if (json.status === 200) {
            commit('setUserInfo', json.data)
          } else {
            commit('setErrorMessage', json.error)
          }
          commit('setUsersLoading', false)
        })
        .catch(error => {
          console.error(error)
          commit('setErrorMessage', 'Не удалось загрузить меню')
          commit('setLoading', false)
        })
    }
  },
  getters: {}
}
