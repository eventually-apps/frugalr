const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const dotenv = require('dotenv');

// load the .env
dotenv.config({ path: './.env.local' });

let app = express();

// API routes 
app.use('/api/invoice', require('./src/api-routes/invoice'));

// in production serve static files from the dist folder
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(__dirname + '/dist/'));

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/dist/index.html'));
}

const port = process.env.NODE_ENV !== 'production' ? 5000 : 80;
app.listen(port);