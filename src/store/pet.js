import URL from "./baseURL";
import createFetch from './createFetch'

const pet = {
  namespaced: true,
  state: {
    list: [],
    errorMsg: null
  },
  mutations: {
    fillList(state, payload) {
      state.list = [...payload];
    },
    saveErr(state, payload) {
      state.errorMsg = payload;
    }
  },
  actions: {
    async fetchPet({ rootGetters, commit }) {
      const fetchData = {
        route: '/v1/pets',
        token: rootGetters.token,
        method: 'GET',
      }
      return createFetch(fetchData)
        .then(res => {
          if (res.status) {
            commit('fillList', res.data.pets)
          }

          if (!res.status) {
            commit('saveErr', res.message)
          }

          return res.status
        })
    },
    async createPet({ rootGetters, dispatch, commit }, payload) {
      const fetchData = {
        route: '/v1/pets',
        token: rootGetters.token,
        method: 'POST'
      }

      return createFetch(fetchData, payload)
        .then(res => {
          if (res.status) {
            dispatch('fetchPet')
              .then(status => {
                return status
              })
          }

          if (!res.status) {
            commit('saveErr', res.message)
          }

          return res.status
        })
    },
    async updatePet({rootGetters}, payload) {
      if (!payload.id) {
        console.error(`!!! NO PET ID !!!`)
        return false // Заранее прерываем запрос, который не пройдет
      }

      const fetchData = {
        route: '/v1/pets/update',
        token: rootGetters.token,
        method: 'POST'
      }

      return createFetch(fetchData, payload)
        .then(res => {
          return res.status
        })
    }
  },
  getters: {
    petList(state) {
      return state.list;
    }
  }
};

export default pet;
