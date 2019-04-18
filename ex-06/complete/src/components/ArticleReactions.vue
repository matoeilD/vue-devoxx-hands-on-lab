<template>
  <div class="btn-group">
    <transition
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutDown"
    >
      <reaction-button
        v-for="(emoji, reaction) in reactions"
        :reaction="reaction"
        :emoji="emoji"
      />
    </transition>
  </div>
</template>

<script>
import ReactionButton from "./ReactionButton";
export default {
  name: "article-reactions",
  components: { ReactionButton },
  data() {
    return {
      reactions: {
        HEART: "😻",
        LAUGH: "😹",
        SHOCK: "🙀",
        GRIEF: "😿",
        ANGER: "😾"
      }
    };
  }
};
</script>
