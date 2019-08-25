<template>
<div class="home">
    <div class="text-center payment">
        <h2>
            <i class="em-svg em-credit_card"/> Payment Information <i class="em-svg em-credit_card"/>
        </h2>
        <h4>
            Invoice For: {{ invoiceFor }}
        </h4>
        <h4>
            Amount Owed: ${{ invoiceAmount }}
        </h4>
        <br>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" >
            </div>
            <div class="form-group col-md-6">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" >
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-8">
                <label for="ccnum">Card Number</label>
                <input type="text" class="form-control" placeholder="ex. 1234 1234 1234 1234">
            </div>
            <div class="form-group col-md-4">
                <label for="cvc">CVC Number</label>
                <input type="text" class="form-control" placeholder="ex. 123">
            </div>
        </div>
        <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" placeholder="1234 Main St">
        </div>
        <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" placeholder="Apartment, studio, or floor">
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group col-md-4">
                <label for="inputCity">State</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="form-group col-md-12">
            <button type="button" class="btn btn-outline-success btn-lg">Submit</button>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import Store from '../store';

@Component({})
export default class Payment extends Vue {
    @Prop() private id!: string;

    private invoiceAmount: number = 0.0;
    private invoiceFor: string = '';

    private async mounted() {
        const data = await Store.dispatch('getInvoice', this.id);
        const invoice = data.data();
        this.invoiceAmount = invoice.invoiceAmount;
        this.invoiceFor = invoice.recipientName;
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

h2 {
    color: #ffffff;
}

.payment {
    height:100%;
    padding-top: 8em;
    padding-left: 20vw;
    padding-right: 20vw;
    color: #ffffff;
}
</style>