export default {
  state: {
    // success #2289b5
    // info #ffcc01
    // error #ff4d00
    // null #464451

    snackbarType: null,
    snackbarMsg: null,
  },
  mutations: {
    setSnackbarMsg (state, payload) {
      state.snackbarMsg = payload
    },
    setSnackbarType (state, payload) {
      state.snackbarType = payload
    },
    clearSnackbar (state) {
      state.snackbarType = null
      state.snackbarMsg = null
    },
  },
  actions: {
    setSnackbarMsg ({ commit }, payload) {
      commit('setSnackbarMsg', payload)
    },
    setSnackbarType ({ commit }, payload) {
      commit('setSnackbarType', payload)
    },
    clearSnackbar ({ commit }) {
      commit('clearSnackbar')
    },
  },
  getters: {
    snackbarType (state) {
      return state.snackbarType
    },
    snackbarMsg (state) {
      return state.snackbarMsg
    },
    snackbarObj (state) {
      const { snackbarMsg, snackbarType } = state
      return {
        msg: snackbarMsg,
        type: snackbarType
      }
    },
  }
}
