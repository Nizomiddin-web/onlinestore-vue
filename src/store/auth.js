import loginRequet from "@/server";

const state = {
  username: localStorage.getItem("user") || "",
  token: "",
};

const actions = {
  async login({ commit }, data) {
    try {
      const user = await loginRequet(data);
      commit("SET_USER", user);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  },
};

const mutations = {
  SET_USER(state, payload) {
    state.username = payload.username;
    localStorage.setItem("user", payload.username);
    localStorage.setItem("token", payload.token);
  },
};

const getters = {
  getUser(state) {
    return state.username;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
};
