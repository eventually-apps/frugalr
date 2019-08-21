<template>
    <div class="text-center home">
      <div class="main-landing">
        <p class ="sub-title"><i class="em-svg em-fire"/> Thank you! <i class="em-svg em-fire"/></p>
        <p class = "sub-text">An invoice has been sent to: {{recipEmail}}</p>
      </div>   
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Store from '../store';

@Component
export default class ConfirmationSend extends Vue {
  private get recipEmail(): string {
        return Store.state.recipientEmail;
    }
}
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
.sub-title{
  font-size: 60px !important;
}

.sub-text {
  font-size: 33px;
}
</style>