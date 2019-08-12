import Vue from 'vue';
import Vuex from 'vuex';
import { InvoiceItem } from './models/invoice/InvoiceItem';

Vue.use(Vuex);

export interface RoostState {
  recipientEmail: string;
  userEmail: string;
  toFirstName: string;
  toLastName: string;
  totalPrice: number;
  invoiceItems: InvoiceItem[];
}

export default new Vuex.Store<RoostState>({
  state: {
    recipientEmail: '',
    userEmail: '',
    toFirstName: '',
    toLastName: '',
    totalPrice: 0.00,
    invoiceItems: [{item: '', price: 0}],
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
  },
  actions: {

  },
});
