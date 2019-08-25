const express = require('express');
const sgMail = require('@sendgrid/mail');
const router = express.Router();

console.log("using sendgrid key: " + process.env.SENDGRID_API_KEY);
console.log(process.env.URL);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.get('/', (req, res) => {
    console.log('** Incoming GET Request to /api/invoice/ **')
    console.log(req);
    console.log(res);
})

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
    const msg = {
        to: body.toEmail,
        from: 'invoice@frugalr.com',
        subject: 'New Invoice on Frugalr',
        html: html
    };

    sgMail.send(msg);
    res.json({ message: 'Sent Invoice' });
});

module.exports = router;