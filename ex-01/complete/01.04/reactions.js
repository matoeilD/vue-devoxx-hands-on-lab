Vue.component("reaction-button", {
  props: ["reaction", "count", "emoji"],
  template: `
      <button class="btn btn-light"

            :title="reaction">
      {{emoji}}
      <template v-if="count">({{count}})</template>
    </button>`
});

const ArticleReactions = Vue.extend({
  template: `<div class="btn-group">
    <reaction-button 
    v-for="emoji, reaction in reactions"
    @click.native="handleClick(reaction)"
    :reaction="reaction"
    :count="reactionsCount && reactionsCount[reaction]"
    :emoji="emoji"
     />
  </div>`,
  async mounted() {
    this.fetchReactions();
  },
  props: ['postId'],
  methods: {
    async fetchReactions() {
      this.reactionsCount = await getReactionsCount(this.postId);
    },
    async handleClick(reaction) {
      await submitReaction(this.postId, reaction);
      this.fetchReactions();
    }
  },
  data() {
    return {
      reactions: REACTIONS,
      reactionsCount: initialiseReactionCounts(REACTIONS)
    };
  }
});

const addReactionsToArticle = article => {
  const footer = article.querySelector("footer");
  const postId = article.dataset.id;
  new ArticleReactions({ el: footer, propsData: { postId } });
};

document.querySelectorAll("article").forEach(addReactionsToArticle);
