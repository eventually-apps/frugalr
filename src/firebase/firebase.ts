import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { appConsts } from '@/lib/utils';

console.log("firebase options", appConsts.firebase);

firebase.initializeApp({
    apiKey: appConsts.firebase.apiKey,
    projectId: appConsts.firebase.projectId,
    authDomain: appConsts.firebase.authDomain,
});

const db = firebase.firestore();
const invoiceCollection = db.collection('invoices');

export {
    db,
    invoiceCollection,
};
