import Store from '../store';

export default class PdfService {
    public PDFDocument = require('pdfkit');

    public GeneratePdf(): any {
        const doc = new this.PDFDocument();

        // Generate Header
        doc.text(this.GenerateBillTo(), {
            width: 100,
            align: 'left',
        });

        // Generate Line Items

        // Generate Footer

        return doc;
    }

    // More Private Parts
    private GenerateBillTo(): string {
        return Store.state.toFirstName + Store.state.toLastName;
    }
}
