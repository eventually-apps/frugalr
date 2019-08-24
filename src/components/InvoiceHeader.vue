<template>
<div class="container invoice-header row">
    <div class="col-md-6 left-header">
        <span class="bill-to">Bill To:</span>
        <br/>
        {{toFirstName}} {{toLastName}}
        <br/>
        {{recipEmail}}    
    </div> 
    <div class="col-md-6 right-header">
        <h3>INVOICE</h3>
        {{currentDate}}
        <br/>
        From: {{userEmail}}
    </div>   
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Store from '../store';
import DateService from '../services/DateService';

const date = new DateService();

@Component
export default class InvoiceHeader extends Vue {
    private currentDate: string = '';

    public created() {
        this.currentDate = date.GetDateString();
    }

    private get recipEmail(): string {
        return Store.state.recipientEmail;
    }

    private get toFirstName(): string {
        return Store.state.toFirstName;
    }

    private get toLastName(): string {
        return Store.state.toLastName;
    }

    private get userEmail(): string {
        return Store.state.userEmail;
    }
}
</script>


<style lang="scss">

.bill-to {
    font-weight: bold;
    text-decoration: underline;
}

.invoice-header {
    color: #000000;
    margin-top: 4vh;
    margin-bottom: 5vh;
}

.left-header{
    text-align: left;
    overflow: hidden;
}

.right-header{
    text-align: right;
    overflow: hidden;
}
</style>