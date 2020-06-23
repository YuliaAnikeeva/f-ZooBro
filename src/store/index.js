import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import order from "./order";
import toastify from "./toastify";
import user from "./user";
import pet from "./pet";
import infoSnackbar from "./infoSnackbar";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    snackSuccess({ commit }, payload) {
      commit("clearSnackbar");
      commit("setSnackbarMsg", payload);
      commit("setSnackbarType", "success");
    },
    snackError({ commit }, payload) {
      commit("clearSnackbar");
      commit("setSnackbarMsg", payload);
      commit("setSnackbarType", "error");
    },
    snackInfo({ commit }, payload) {
      commit("clearSnackbar");
      commit("setSnackbarMsg", payload);
      commit("setSnackbarType", "info");
    },
    snackNull({ commit }, payload) {
      commit("clearSnackbar");
      commit("setSnackbarMsg", payload);
      commit("setSnackbarType", "null");
    }
  },
  getters: {
    token() {
      return localStorage.getItem("userToken");
    }
  },
  modules: {
    auth,
    order,
    toastify,
    user,
    pet,
    infoSnackbar
  }
});
