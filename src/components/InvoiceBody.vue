<template>
    <div class="col">
        <div class="item-header row">
            <div class="col-md-9 pull-left">
                Item Description
            </div>
            <div class ="col-md-3 pull-left">
                Price
            </div>
        </div>
        <div class="invoice-body">
            <invoice-line-item v-for="(item, index) in InvoiceItems" v-bind:key="index" :showAdd="ableToAddInvoiceItem(index)" :currentIndex="index"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import InvoiceLineItem from '@/components/InvoiceLineItem.vue';
import { InvoiceItem } from '../models/invoice/InvoiceItem';
import Store from '../store';

@Component({
    components: {
        InvoiceLineItem,
    },
})
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
    font-weight: bold;
    text-align: left;
    color: #000000;
    border-bottom: 8px solid rgba(#252525, .4);
}

.invoice-body{
    margin-top: 10px;
    min-height: 525px;
    max-height: 525px;
    overflow-x: hidden;    
    overflow-y: auto;
}

::-webkit-scrollbar {
    width: 14px;
    height: 18px;
    margin-left: 5px;
}
</style>