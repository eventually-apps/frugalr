const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('** Incoming GET Request to /api/invoice/ **')
    console.log(req);
    console.log(res);
})

router.post('/', async (req, res) => {
    console.log('** Incoming POST Request to /api/invoice/ **')
    res.json({ message: 'Sent Invoice' });
});

module.exports = router;