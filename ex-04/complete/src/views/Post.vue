<template>
  <div class="post">
    <bootstrap-loader v-if="$store.state.isLoading" />
    <template v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </template>
  </div>
</template>

<script>
import BootstrapLoader from "../components/BootstrapLoader";
export default {
  props: ["postId"],
  computed: {
    post() {
      const { postId } = this;
      const post = this.$store.state.posts.find(p => p.id == postId);
      if (!post) {
        this.$store.dispatch("fetchPost", { postId });
      }
      return post;
    }
  },
  components: { BootstrapLoader }
};
</script>
