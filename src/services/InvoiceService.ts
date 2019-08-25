import { Invoice } from '@/models/invoice/Invoice';
import { invoiceCollection } from '@/firebase/firebase';

export default class InvoiceService {
    public async createInvoice(invoice: Invoice): Promise<Response> {
        const data = {
            recipientEmail: invoice.toEmail,
            recipientName: invoice.to,
            message: invoice.message,
            invoiceAmount: invoice.invoiceAmount,
            invoiceItems: invoice.items,
        };
        const ref = await invoiceCollection.add(data);

        return fetch('/api/invoice/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                toEmail: data.recipientEmail,
                fromEmail: invoice.fromEmail,
                message: data.message,
                amount: data.invoiceAmount,
                id: ref.id,
            }),
        });
    }

    public getInvoice(invoiceId: string) {
        const docRef = invoiceCollection.doc(invoiceId);

        return docRef.get();
    }
}
