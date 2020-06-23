import URL from "./baseURL";
import createFetch from "./createFetch";

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
    async fetchPet({ rootGetters, commit, dispatch }) {
      const fetchData = {
        route: "/v1/pets",
        token: rootGetters.token,
        method: "GET"
      };
      return createFetch(fetchData).then(res => {
        if (res.status) {
          commit("fillList", res.data.pets);
          dispatch(
            "setSnack",
            { status: "success", text: "Питомцы загружены" },
            { root: true }
          );
        }

        if (!res.status) {
          commit("saveErr", res.message);
        }

        return res.status;
      });
    },
    async createPet({ rootGetters, dispatch, commit }, payload) {
      const fetchData = {
        route: "/v1/pets",
        token: rootGetters.token,
        method: "POST"
      };

      return createFetch(fetchData, payload).then(res => {
        if (res.status) {
          dispatch("fetchPet").then(status => {
            return status;
          });
        }

        if (!res.status) {
          commit("saveErr", res.message);
        }

        return res.status;
      });
    },
    async updatePet({ rootGetters }, payload) {
      // Заранее прерываем запрос, который не пройдет
      if (!payload.id) {
        console.error(`!!! NO PET ID !!!`);
        return false;
      }

      const fetchData = {
        route: "/v1/pets/update",
        token: rootGetters.token,
        method: "POST"
      };

      return createFetch(fetchData, payload).then(res => {
        return res.status;
      });
    }
  },
  getters: {
    petList(state) {
      return state.list;
    }
  }
};

export default pet;
