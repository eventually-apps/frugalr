import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    console.log("Hello From from function...");
    response.send("Hello from Firebase!!");
});


export const generateInvoice = functions.firestore.document('/invoices/{invoiceId}').onCreate((data, context) => {
    console.log(context);
    console.log(data);
    return 0;
})