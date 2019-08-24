import Vue from 'vue';
import Vuex from 'vuex';
import { InvoiceItem } from './models/invoice/InvoiceItem';
import { sum } from './lib/utils';
import InvoiceService from '@/services/InvoiceService';
import { Invoice } from './models/invoice/Invoice';
import router from '@/router/router';

Vue.use(Vuex);

export interface RootState {
  recipientEmail: string;
  userEmail: string;
  toFirstName: string;
  toLastName: string;
  invoiceItems: InvoiceItem[];
}

const invoiceService = new InvoiceService();

export default new Vuex.Store<RootState>({
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
    toFullName(state): string {
      return `${state.toFirstName} ${state.toLastName}`;
    },
  },
  actions: {
    sendInvoice({ state, getters }, message) {
      const invoice = new Invoice(getters.toFullName, state.recipientEmail,
        state.userEmail, message, state.invoiceItems);

      invoiceService.createInvoice(invoice).then((ref: firebase.firestore.DocumentReference) => {
        router.push('/confirmation');
      });
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
      state.userEmail = '';
      state.invoiceItems = [{ item: '', price: 0 }];
    },
    updateInvoiceItem(state, { index, item }) {
      state.invoiceItems[index].item = item;
    },
    updateInvoicePrice(state, { index, price }) {
      state.invoiceItems[index].price = price;
    },
  },
});
