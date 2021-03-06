import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Post from "./views/Post.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Index
    },
    {
      path: "/post/:postId",
      name: "post",
      component: Post,
      props: true
    }
  ]
});
