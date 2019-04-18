<template>
  <div id="app">
    <header class="py-3">
      <nav>
        <div id="nav" class="container">
          <router-link to="/">Home</router-link>
        </div>
      </nav>
    </header>
    <transition
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view class="container" />
    </transition>
  </div>
</template>

<style lang="scss">
  @import '~animate.css/animate.css';
$primary: #40b883;
$font-family-base: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
@import "~bootstrap/scss/bootstrap";
</style>
