import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!!");
});

export const sendInvoice = functions.database.instance('frugalr-e77cf').ref('/invoices')
.onCreate((snapshot, context) => {
    console.log(snapshot);
    console.log(context);
})