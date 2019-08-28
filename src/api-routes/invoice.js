const express = require('express');
const sgMail = require('@sendgrid/mail');
const { generatePdf } = require("../services/PdfService");

const router = express.Router();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/', async (req, res) => {
    console.log('** Incoming POST Request to /api/invoice/ **')
    const body = req.body;
    const url = process.env.URL;
    const paymentUrl = `${url}/payment/${body.id}`
    const html = `
    A new invoice for $${body.amount} has been sent to you on Frugalr, by <strong>${body.fromEmail}</strong>, with the following message:
    <p>
    ${body.message}
    <br>
    You can fulfill this invoice and submit your payment here: <a href="${paymentUrl}" target="_blank">${paymentUrl}</a>
    `
    const pdf = await generatePdf({
        invoiceAmount: body.amount,
        items: body.items,
        name: body.name
    });

    const msg = {
        to: body.toEmail,
        from: 'invoice@frugalr.com',
        subject: 'New Invoice on Frugalr',
        html: html,
        attachments: [
            {
                content: pdf,
                filename: 'invoice.pdf',
                type: 'application/pdf',
                disposition: 'attachment'
            }
        ]
    };

    sgMail.send(msg);
    res.json({ message: 'Sent Invoice' });
});

module.exports = router;