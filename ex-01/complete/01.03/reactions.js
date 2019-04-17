Vue.component("reaction-button", {
  props: ["reaction", "count", "emoji"],
  template: `
      <button class="btn btn-light"
            @click="reactionsCount[reaction]++"
            :title="reaction">
      {{emoji}}
      <template v-if="count">({{count}})</template>
    </button>`
});

const ArticleReactions = Vue.extend({
  template: `<div class="btn-group">
    <reaction-button 
    v-for="emoji, reaction in reactions"
    :reaction="reaction"
    :count="reactionsCount[reaction]"
    :emoji="emoji"
     />
  </div>`,
  data() {
    return {
      reactions: REACTIONS,
      reactionsCount: initialiseReactionCounts(REACTIONS)
    };
  }
});


const addReactionsToArticle = article => {
  const footer = article.querySelector("footer");
  new ArticleReactions({ el: footer });
};

document.querySelectorAll("article").forEach(addReactionsToArticle);
