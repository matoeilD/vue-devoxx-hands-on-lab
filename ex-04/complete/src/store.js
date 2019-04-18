import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    setError(state, { error }) {
      state.error = error;
    },
    setPosts(state, { posts }) {
      state.posts = posts;
    },
    setLoadingState(state, { isLoading }) {
      state.isLoading = isLoading;
    }
  },
  actions: {
    fetchPosts() {

    }
  }
});
