import axios from 'axios'
const state = {
  posts: [],
};

const getters = {
  filter_prices(state) {
    return state.posts.filter((item) => item.price >= 100);
  },
};

const mutations = {
  SET_ALL_POSTS(state, val) {
    state.posts = val;
  },
};

const actions = {
  async getPosts({ commit }) {
    try {
      let res = await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => res.data);
      commit("SET_ALL_POSTS", res);
    } catch (error) {
      commit("SET_ALL_POSTS", []);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
