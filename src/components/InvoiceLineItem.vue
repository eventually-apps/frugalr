<template>
 <div class="form-row">
    <div class="form-group col-md-9">
      <input v-model="item" type="text" class="form-control" placeholder="">
    </div>
    <div class="form-group col-md-2">
      <input v-model="price" type="number" class="form-control" placeholder="0.00">
    </div>
    <span class="col-md-1">
      <button v-if="!showAdd" type="button" class="btn btn-outline-danger remove-line" @click="removeItem(currentIndex)"><i class="fa fa-minus"></i></button>
      <button v-if="showAdd" type="button" class="btn btn-outline-success add-line" @click="addItem()"><i class="fa fa-plus"></i></button>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Store from '../store';
import { InvoiceItem } from '@/models/invoice/InvoiceItem';

@Component
export default class LineItem extends Vue {
  @Prop() private showAdd!: boolean;
  @Prop() private currentIndex!: number;

  public addItem(): void {
    Store.commit('addInvoiceLine', { item: '', price: 0 });
  }

  public removeItem(index: number): void {
    Store.commit('removeInvoiceLine', index);
  }

  public get item() {
    return Store.state.invoiceItems[this.currentIndex].item;
  }

  public set item(value: string) {
    const payload = {
      index: this.currentIndex,
      item: value,
    };
    Store.commit('updateInvoiceItem', payload);
  }

  public get price() {
    return Store.state.invoiceItems[this.currentIndex].price;
  }

  public set price(value: number) {
    const payload = {
      index: this.currentIndex,
      price: Number(value),
    };
    Store.commit('updateInvoicePrice', payload);
  }
}
</script>

<style lang="scss">

.btn:hover {
  color: #ffffff;
}

.form-row{
  margin-top: 8px;
}
</style>

