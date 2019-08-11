<template>
<div class="container">
    <div class="col-md-3 pull-left invoice-header">
        <h5>Bill To:</h5>
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

    private get userEmail(): string {
        return Store.state.userEmail;
    }
}
</script>


<style lang="scss">
.invoice-header {
    color: #000000;
    margin-top: 4vh;
}
</style>