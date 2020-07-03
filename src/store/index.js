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
    setSnack({ commit }, { status, text }) {
      if (
        status === "null" ||
        status === "info" ||
        status === "error" ||
        status === "success"
      ) {
        commit("clearSnackbar");
        commit("setSnackbarMsg", text);
        commit("setSnackbarType", status);
      }
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
