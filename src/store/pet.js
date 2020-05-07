import URL from "./baseURL";

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
    async fetchPet({ getters, commit }) {
      return fetch(`${URL}/v1/pets`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Content-Type": "application/json",
          Authorization: getters.userToken
        },
        method: "GET"
      })
        .then(response => {
          return response.json();
        })
        .then(json => {
          if (json.status === 1) {
            const { data } = json;
            commit("fillList", data);
            return true;
          }
          if (json.status != 1) {
            const { message } = json;
            commit("saveErr", message);
            console.error(message);
            return false;
          }
        });
    },
    async createPet({ getters, dispatch }, payload) {
      return fetch(`${URL}/v1/pets`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          Authorization: getters.userToken
        },
        method: "POST",
        mode: "cors",
        body: JSON.stringify(payload)
      })
        .then(response => {
          return response.json();
        })
        .then(json => {
          const { status } = json;
          if (status === 1) {
            return true;
          }
        })
        .catch(err => {
          console.error("ERROR -> " + err);
          return false;
        });
    }
  },
  getters: {
    userToken() {
      return localStorage.getItem("userToken");
    },
    petList(state) {
      return state.list;
    }
  }
};

export default pet;
