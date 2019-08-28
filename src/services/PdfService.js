const pdfDocument = require('pdfkit');
const base64 = require('base64-stream');

function generatePdf(invoice) {
  let doc = new pdfDocument({ size: "A4", margin: 50 });
  let base64String = '';
  console.log('**Generating pdf...**');

  generateHeader(doc);
  generateInvoiceTable(doc, invoice);
  generateFooter(doc);

  let stream = doc.pipe(new base64.Base64Encode());
  doc.end();

  return new Promise((resolve, reject) => {
    stream.on('data', function (chunk) {
      base64String += chunk;
    });

    stream.on('end', function () {
      resolve(base64String);
    })
  });
}

function generateHeader(doc, invoice) {
  doc
    .fontSize(20)
    .text('Fruglar, LLC.', 95, 57)
    .fontSize(10)
    .text(`Invoice Date: ${formatDate(new Date())}`, 200, 80, { align: 'right' })
    .text(`Customer Name: ${invoice.name}`, 200, 80, { align: 'right' })
    .text(`From: ${invoice.fromEmail}`, 200, 80, { align: 'right'})
    .moveDown();
}

function generateFooter(doc) {
  doc
    .fontSize(10)
    .text('Don\'t forget to pay your friend!', 50, 780, { align: 'center', width: 500 })
    .fontSize(8)
    .text('Frugalr, LCC. 2019', { align: 'center', width: 500 });
}

function generateInvoiceTable(doc, invoice) {
  let i;
  const invoiceTableTop = 330;

  doc.font('Helvetica-Bold');
  generateTableRow(doc, invoiceTableTop, 'Description', 'Cost');
  generateHr(doc, invoiceTableTop + 20);
  doc.font('Helvetica');

  for (i = 0; i < invoice.items.length; i++) {
    const item = invoice.items[i];
    const position = invoiceTableTop + (i + 1) * 30;
    generateTableRow(doc, position, item.item, item.price);
    generateHr(doc, position + 20);
  }

  doc.text(`Balance Due: ${invoice.invoiceAmount}`, 0, position, { align: 'right' });
}

function generateTableRow(doc, y, item, price) {
  doc
    .fontSize(10)
    .text(item, 50, y)
    .text(price, 0, y, { align: 'right' });
}

function generateHr(doc, y) {
  doc
    .strokeColor('#aaaaaa')
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}

function formatDate(date) {
  return date.getUTCFullYear() + "/" + (date.getUTCMonth() + 1) + "/" + date.getUTCDate();
}

module.exports = {
  generatePdf
};
