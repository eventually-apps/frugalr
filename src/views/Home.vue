<template>
  <div class="text-center home">
    <Landing msg="Frugalr"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Landing from '@/components/Landing.vue'; // @ is an alias to /src

@Component({
  components: {
    Landing,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
html, body{
  height: 100%;
}
body {
  display: flex;  
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
  height: 100% !important;
  width: 100% !important;
}
.home{
    height:100%;
    padding: 0 1.5rem;
}

</style>



