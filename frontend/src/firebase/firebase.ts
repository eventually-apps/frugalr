import * as firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: 'AIzaSyDcqC-UfwvC1D1qV6GwAo_u7GtrYRT5zss',
    projectId: 'frugalr-e77cf',
    authDomain: 'frugalr-e77cf.firebaseapp.com',
});

const db = firebase.firestore();
const invoiceCollection = db.collection('invoices');

export {
    db,
    invoiceCollection,
};
