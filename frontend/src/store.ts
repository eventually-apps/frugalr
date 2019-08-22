import Vue from 'vue';
import Vuex from 'vuex';
import { InvoiceItem } from './models/invoice/InvoiceItem';
import { sum } from './lib/utils';

Vue.use(Vuex);

export interface RoostState {
  recipientEmail: string;
  userEmail: string;
  toFirstName: string;
  toLastName: string;
  invoiceItems: InvoiceItem[];
}

export default new Vuex.Store<RoostState>({
  state: {
    recipientEmail: '',
    userEmail: '',
    toFirstName: '',
    toLastName: '',
    invoiceItems: [{ item: '', price: 0 }],
  },
  getters: {
    totalPrice(state): number {
      return sum(state.invoiceItems, (item) => item.price);
    },
  },
  mutations: {
    changeRecipEmail(state, rEmail: string) {
      state.recipientEmail = rEmail;
    },
    changeUserEmail(state, uEmail: string) {
      state.userEmail = uEmail;
    },
    addInvoiceLine(state, lineItem: InvoiceItem) {
      state.invoiceItems.push(lineItem);
    },
    removeInvoiceLine(state, index: number) {
      state.invoiceItems.splice(index, 1);
    },
    changeToFirstName(state, name) {
      state.toFirstName = name;
    },
    changeToLastName(state, name) {
      state.toLastName = name;
    },
    resetEverything(state) {
      state.toFirstName = '';
      state.toLastName = '';
      state.recipientEmail = '';
      state.invoiceItems = [];
      state.totalPrice = 0.00;
    },
    updateInvoiceItem(state, { index, item }) {
      state.invoiceItems[index].item = item;
    },
    updateInvoicePrice(state, { index, price }) {
      state.invoiceItems[index].price = price;
    },
  },
  actions: {

  },
});
