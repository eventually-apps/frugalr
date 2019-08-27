import Store from '../store';
import { Invoice } from '@/models/invoice/Invoice';

export default class PdfService {
    public PDFDocument = require('pdfkit');
    public fs = require('fs');

    public GeneratePdf(doc: any, invoice: Invoice): any {

        this.GenerateHeader(doc);
        this.GenerateCustomerInformation(doc, invoice);
        this.GenerateInvoiceTable(doc, invoice);
        this.GenerateFooter(doc);

        doc.end();
        // doc.pipe(fs.createWriteStream(path));
        return doc;
    }

    // Private Stuff, top secret
    private GenerateHeader(doc: any) {
        doc
          .image('logo.png', 50, 45, { width: 50 }).fillColor('#444444')
          .fontSize(20)
          .text('Fruglar, LLC.', 110, 57)
          .fontSize(10)
          .text('123 Main Street', 200, 65, { align: 'right' })
          .text('New York, NY, 10025', 200, 80, { align: 'right' })
          .moveDown();
      }

    private GenerateCustomerInformation(doc: any, invoice: Invoice) {
        doc
            // .text(`Invoice Number: ${invoice.}`, 50, 200)
            .text(`Invoice Date: ${new Date()}`, 50, 215)
            .text(`Balance Due: ${invoice.invoiceAmount}`, 50, 130)

            .text('Dummy Data', 300, 200)
            .text('More Dummy Data', 300, 215)
            .text('A', 'B', 'C', 300, 130 ).moveDown();
    }

    private GenerateFooter(doc: any) {
        doc
          .fontSize(10)
          .text('Don\'t forget to pay your friend!', 50, 780,
            {
                align: 'center',
                width: 500,
            },
        );
    }

    private GenerateInvoiceTable(doc: any, invoice: Invoice) {
        let i;
        const invoiceTableTop = 330;

        doc.font('Helvetica-Bold');
        this.GenerateTableRow(doc, invoiceTableTop, 'Description', 'Unit Cost');
        this.GenerateHr(doc, invoiceTableTop + 20);
        doc.font('Helvetica');

        for (i = 0; i < invoice.items.length; i++) {
          const item = invoice.items[i];
          const position = invoiceTableTop + (i + 1) * 30;
          this.GenerateTableRow(doc, position, item.item, item.price);
          this.GenerateHr(doc, position + 20);
        }
    }

    private GenerateTableRow(doc: any, y: any, c1: any, c5: any) {
        doc
          .fontSize(10)
          .text(c1, 50, y)
        //   .text(c2, 150, y)
        //   .text(c3, 280, y, { width: 90, align: 'right' })
        //   .text(c4, 370, y, { width: 90, align: 'right' })
          .text(c5, 0, y, { align: 'right' });
    }

    private GenerateHr(doc: any, y: any) {
        doc
          .strokeColor('#aaaaaa')
          .lineWidth(1)
          .moveTo(50, y)
          .lineTo(550, y)
          .stroke();
    }
}
