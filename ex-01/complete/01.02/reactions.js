/* global REACTIONS initialiseReactionCounts */

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

new Vue({
  el: 'article.first footer',
  template: `<div class="btn-group">
    <reaction-button 
    v-for="emoji, reaction in reactions"
    :reaction="reaction"
    :count="reactionsCount[reaction]"
    :emoji="emoji"
     />
  </div>`,
  data: {
    reactions: REACTIONS,
    reactionsCount: initialiseReactionCounts(REACTIONS)
  }
});
