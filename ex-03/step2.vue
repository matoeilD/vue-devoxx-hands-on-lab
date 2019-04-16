<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data: () => ({ message: "Hello Devoxx!" })
};
</script>

<style lang="sass">
  div 
    margin: 0 auto
    width: 30%

    h1 
      font-size: 14px
</style>