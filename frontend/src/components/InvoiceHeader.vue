<template>
<div class="container invoice-header">
    <div class="col-md-2 pull-left ">
        <span class="bill-to">Bill To:</span>
        <p>{{toFirstName}} {{toLastName}}</p>
    </div>
    {{recipEmail}}
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Store from '../store';

@Component
export default class InvoiceHeader extends Vue {
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
}
</style>