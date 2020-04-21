import Vue from 'vue'
import Vuex from 'vuex'
import admin from './admin'
import auth from './auth'
import order from './order'
import toastify from './toastify'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    admin, auth, order, toastify, user
  }
})
