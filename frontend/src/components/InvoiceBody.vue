<template>
    <div class="invoice-body col">
        <div class="item-header row">
            <div class="col-md-9 pull-left">
                Item Description
            </div>
            <div class ="col-md-2 pull-left">
                Price
            </div>
        </div>
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
.item-header {
    color: #000000;
}

.invoice-body{
    max-height: 525px;
    overflow-x: hidden;    
    overflow-y: auto;
}
</style>