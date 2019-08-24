import { InvoiceItem } from './InvoiceItem';
import { sum } from '../../lib/utils';

export class Invoice {

    constructor(public to: string, public toEmail: string,
                public fromEmail: string, public message: string,
                public items: InvoiceItem[]) {
    }

    /**
     * Gets the total amount for the invoice.
     */
    public get invoiceAmount() {
        return sum<InvoiceItem>(this.items, (item) => item.price);
    }
}
