import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    error:  null,
    posts: [],
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
    async fetchPosts({ commit }) {
      try {
        commit("setLoadingState", { isLoading: true });
        await delay(Math.random() * 2000);
        const { data: posts } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        commit("setPosts", { posts });
      } catch (error) {
        commit("setError", { error });
      } finally {
        commit("setLoadingState", { isLoading: false });
      }
    },
    async fetchPost({ state, commit }, { postId }) {
      try {
        commit("setLoadingState", { isLoading: true });
        await delay(Math.random() * 2000);
        const { data: post } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        const posts = [...state.posts, post];
        commit("setPosts", { posts });
      } catch (error) {
        commit("setError", { error });
      } finally {
        commit("setLoadingState", { isLoading: false });
      }
    }
  }
});
