import { Invoice } from '@/models/invoice/Invoice';
import { invoiceCollection} from '@/firebase/firebase';

export default class InvoiceService {
    public createInvoice(invoice: Invoice): Promise<firebase.firestore.DocumentReference> {
        return invoiceCollection.add({
            recipientEmail: invoice.to,
            invoiceAmount: invoice.invoiceAmount,
            invoiceItems: invoice.items,
        });
    }
}
