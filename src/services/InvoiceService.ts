import { Invoice } from '@/models/invoice/Invoice';
import { invoiceCollection } from '@/firebase/firebase';

export default class InvoiceService {
    public createInvoice(invoice: Invoice): Promise<firebase.firestore.DocumentReference> {
        fetch('/api/invoice/', {
            method: 'POST',
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
