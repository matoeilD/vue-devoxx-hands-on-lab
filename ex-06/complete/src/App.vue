<template>
  <div id="app">
    <header class="py-3">
      <nav>
        <div id="nav" class="container">
          <router-link to="/">Home</router-link>
        </div>
      </nav>
    </header>
    <router-view class="container"/>
  </div>
</template>

<style lang="scss">
  $primary: #40b883;
  $font-family-base: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  @import '~bootstrap/scss/bootstrap';
</style>
