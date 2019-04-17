<template>
  <div id="app">
    <header>
      <nav>
        <div id="nav" class="container">
          <router-link to="/">Home</router-link>
        </div>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">
  $primary: #40b883;
  $font-family-base: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  @import '~bootstrap/scss/bootstrap';
</style>
