export const AUTH_REQUEST = "AUTH_REQUEST"
export const AUTH_SUCCESS = "AUTH_SUCCESS"
export const AUTH_ERROR = "AUTH_ERROR"
export const AUTH_LOGOUT = "AUTH_LOGOUT"

const state = {
  status: '',
  token: '',
}

const getters = {
  getStatus: state => state.status,
  getToken: state => state.token,
  isAuthenticated: state => !!state.token,
}

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'pending'
  },
  [AUTH_SUCCESS]: (state, token) => {
    state.status = 'success'
    state.token = token
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error'
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = ''
  },
}

const actions = {
  [AUTH_REQUEST]: ({ commit }, { email, password }) => {
    commit(AUTH_REQUEST)
    return mockFetch("/login", {email, password})
      .then( (resp) => {
        localStorage.setItem("user-token", resp.token)
        commit(AUTH_SUCCESS, resp.token)
        return resp
      }).catch( (msg) => {
        localStorage.removeItem("user-token")
        commit(AUTH_ERROR)
        return Promise.reject(msg)
      })
  }
}

const mockFetch = (url, {email}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email==='user@example.com') {
        resolve({ token: 'some-token' })
      }
      reject("Error")
    },2000)
  })
}

const auth = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

export default auth
