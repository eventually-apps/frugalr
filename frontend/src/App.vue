<template>
  <div id="app">      
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default class App extends Vue {}
</script>


<style lang="scss">

html, body {
  background: linear-gradient(#1f1e1e, #725c7a);
  height: 100%;
  width: 100%;
  z-index: -3;
}

#app {
  font-family: "proxima-light",Verdana,Helvetica,sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  letter-spacing: -0.025em;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #999b9c;
  width: 100%;
  height: 100%;
}
</style>
