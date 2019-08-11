<template>
    <div class="invoice-body">
        <invoice-line-item/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import InvoiceLineItem from '@/components/InvoiceLineItem.vue';


@Component
export default class InvoiceBody extends Vue {
   
}
</script>>

<style lang="scss">

</style>