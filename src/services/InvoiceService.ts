import { Invoice } from '@/models/invoice/Invoice';
import { invoiceCollection } from '@/firebase/firebase';

export default class InvoiceService {
    public createInvoice(invoice: Invoice): Promise<firebase.firestore.DocumentReference> {
        const data = {
            toEmail: invoice.toEmail,
            fromEmail: invoice.fromEmail,
            amount: invoice.invoiceAmount,
            message: invoice.message
        };
        fetch('/api/invoice/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        return invoiceCollection.add({
            recipientEmail: invoice.toEmail,
            recipientName: invoice.to,
            message: invoice.message,
            invoiceAmount: invoice.invoiceAmount,
            invoiceItems: invoice.items,
        });
    }
}
