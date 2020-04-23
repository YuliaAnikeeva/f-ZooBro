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
        localStorage.setItem("user-token", resp.token)
        commit(AUTH_SUCCESS, resp.token)
        return resp
      }).catch( (msg) => {
        localStorage.removeItem("user-token")
        commit(AUTH_ERROR)
        return Promise.reject(msg)
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
      .then( (resp) => {
        commit(RECOVERY_SUCCESS)
        return resp
      })
      .catch( (resp) => {
        commit(RECOVERY_ERROR, resp)
        return Promise.reject(resp)
      })
  }
}

const mockFetch = (url, {email}) => {
  return new Promise((resolve, reject) => {
    let success, fail
    if (url == "/login") {
      success = { token: 'some-token' }
      fail = "Не верный email или пароль"
    }else if (url == "/recovery-password") {
      success = "Пароль отправлен на почту " + email
      fail = "Пользователь с такой почтой не найден"
    }
    setTimeout(() => {
      if (email==='user@example.com') {
        resolve(success)
      }
      reject(fail)
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
