<template>
    <div class="invoice-body col">
        <invoice-line-item v-for="(item, index) in InvoiceItems" v-bind:key="index" :showAdd="ableToAddInvoiceItem(index)" :currentIndex="index"/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import InvoiceLineItem from '@/components/InvoiceLineItem.vue';
import { InvoiceItem } from '../models/invoice/InvoiceItem';
import Store from '../store';

@Component
export default class InvoiceBody extends Vue {

    public get InvoiceItems(): InvoiceItem[] {
       return Store.state.invoiceItems;
    }

    public ableToAddInvoiceItem(index: number): boolean {
        const length = this.InvoiceItems.length;

        if (index === (length - 1)) {
            return true;
        }
        return false;
    }
}
</script>

<style lang="scss">
.invoice-body{
    max-height: 400px;
    overflow-x: hidden;    
    overflow-y: auto;
}
</style>