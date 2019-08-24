<template>
<div class="col footer-total justify-content-between">
    <div class="align-self-end total">
        TOTAL: {{totalAmount}}
    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Store from '../store';

@Component
export default class InvoiceFooter extends Vue {
    private get totalAmount(): number {
        return Store.getters.totalPrice;
    }
}
</script>

<style lang="scss">
.total {
    text-align: right;
    color:#000000;
    font-size: 18px;
    margin-top: 6px;
}

.footer-total {
    border-top: 8px solid rgba(#252525, .4);
    margin-top: 2vh;
}
</style>