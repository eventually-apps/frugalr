import { InvoiceItem } from './InvoiceItem';
import { sum } from '../../lib/utils';

export class Invoice {
    /**
     * Who to send the invoice to.
     */
    public to: string = '';
    /**
     * All the itmes in the invoice
     */
    public items: InvoiceItem[] = [];

    /**
     * Gets the total amount for the invoice.
     */
    public get invoiceAmount() {
        return sum<InvoiceItem>(this.items, (item) => item.price);
    }
}
