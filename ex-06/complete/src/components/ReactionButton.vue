<template>
  <button class="btn btn-light" :title="reaction">
    {{ emoji }}
    <template v-if="count">
      ({{ count }})
    </template>
  </button>
</template>

<script>
export default {
  props: ["emoji", "count", "reaction"],
  name: "reactions-button"
};
</script>
