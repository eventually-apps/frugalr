<template>
  <div class="main-landing">
    <p class ="title">{{ msg }}</p>
    <p class ="sub-title">Send your friends invoices</p>
    <p class="catchphrase">Tired of friends asking why they owe you {{amt}} for <i class="em-svg em-eggplant"/><i class="em-svg em-custard"/><i class="em-svg em-pizza"/> ?</P>
    <p class="catchphrase">Now you can send them a friendly invoice and never forget!</p>
    <router-link to="/create">
      <button type="button" class="btn btn-outline-light btn-lg start">Create Invoice</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CurrencyService from '../services/CurrencyService';

const currency = new CurrencyService();

@Component
export default class Landing extends Vue {
  @Prop() public msg!: string;
  @Prop() public amt!: string;

  public created() {
    this.amt = currency.GenerateRandomAmount();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.catchphrase {
  font-size: 18px;
}
.title {
  color:  #ffc4ff;
  font-size: 60px;
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
}
.sub-title{
  color:  #ffc4ff;
  font-size: 30px;
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
}
.main-landing{
  padding-top: 15em;
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
  color: #ffffff;
}
.start{
  margin-top: 2%
}
</style>
