<template>
  <div class="index">
    <header class="my-5">
      <h1 class="display-4">PFP-5420 Introduction à Vue.js</h1>
    </header>
    <bootstrap-loader v-if="$store.state.isLoading" />
    <div v-for="post in $store.state.posts" :key="post.id" class="post mb-5">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      <router-link :to="{ name: 'post', params: { postId: post.id } }">
        Read More…
      </router-link>
    </div>
  </div>
</template>

<script>
import BootstrapLoader from "../components/BootstrapLoader";
export default {
  name: "index",
  components: { BootstrapLoader },
  mounted() {
    this.$store.dispatch("fetchPosts");
  }
};
</script>
