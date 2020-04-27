export const AUTH_REQUEST = "AUTH_REQUEST"
export const AUTH_SUCCESS = "AUTH_SUCCESS"
export const AUTH_ERROR = "AUTH_ERROR"
export const AUTH_LOGOUT = "AUTH_LOGOUT"

export const RECOVERY_REQUEST = "RECOVERY_REQUEST"
export const RECOVERY_SUCCESS = "RECOVERY_SUCCESS"
export const RECOVERY_ERROR = "RECOVERY_ERROR"

const state = {
  status: '',
  recoveryStatus: '',
  token: localStorage.getItem('user-token') || '',
}

const getters = {
  getStatus: state => state.status,
  getRecoveryStatus: state => state.recoveryStatus,
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
  [RECOVERY_REQUEST]: (state) => {
    state.recoveryStatus = 'pending'
  },
  [RECOVERY_SUCCESS]: (state) => {
    state.recoveryStatus = 'success'
  },
  [RECOVERY_ERROR]: (state) => {
    state.recoveryStatus = 'error'
  },
}

const actions = {
  [AUTH_REQUEST]: ({ commit }, { email, password }) => {
    commit(AUTH_REQUEST)
    return mockFetch("/login", {email, password})
      .then( (resp) => {
        if (resp.status == 1) {
          localStorage.setItem("user-token", resp.data.token)
          commit(AUTH_SUCCESS, resp.data.token)
          return resp.data
        } else if (resp.status == -1) {
          localStorage.removeItem("user-token")
          commit(AUTH_ERROR, resp.message)
          return Promise.reject(resp.message)
        }
      })
  },
  [AUTH_LOGOUT]: ({ commit }) => {
    return new Promise( (resolve, reject) => {
      commit(AUTH_LOGOUT)
      localStorage.removeItem("user-token")
      resolve()
    })
  },
  [RECOVERY_REQUEST]: ({ commit }, email) => {
    commit(RECOVERY_REQUEST)
    return mockFetch("/recovery-password", {email})
      .then( resp => {
        if (resp.status == 1) {
          commit(RECOVERY_SUCCESS)
          return resp.data
        } else if (resp.status == -1) {
          commit(RECOVERY_ERROR, resp.message)
          return Promise.reject(resp.message)
        }
      })
  }
}

const mockFetch = (url, {email}) => {
  return new Promise((resolve, reject) => {
    let success = { status: 1 },
        fail = { status: -1}
    if (url == "/login") {
      success.data = { token: 'some-token' }
      fail.message = ["Не верный email или пароль"]
    }else if (url == "/recovery-password") {
      success.data = {}
      fail.message = ["Пользователь с такой почтой не найден"]
    }
    setTimeout(() => {
      if (email==='user@example.com') {
        resolve(success)
      }
      resolve(fail)
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
