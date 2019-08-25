import Store from '../store';
import { Invoice } from '@/models/invoice/Invoice';

export default class PdfService {
    public PDFDocument = require('pdfkit');

    public GeneratePdf(invoice: Invoice): any {
        const doc = new this.PDFDocument();

        // Generate Header
        doc.text(Store.getters.toFullName, {
            width: 100,
            align: 'left',
        });

        // Generate Line Items
        for (const item of invoice.items) {
            doc.text(item);
        }

        // Generate Footer

        // Finalize Document
        doc.end();

        return doc;
    }
}
