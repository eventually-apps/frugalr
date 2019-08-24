const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const dotenv = require('dotenv');

// load the .env
dotenv.config({ path: './.env.local' });

let app = express();

// in production serve static files from the dist folder
if (process.env.NODE_ENV === 'production') {
    app.use(serveStatic(path.join(__dirname, 'dist')));

    // handle this as a SPA app
    app.get(/.*/, (req, res) => res.sendFile(__dirname + './dist/index.html'));
}

const port = process.env.NODE_ENV !== 'production' ? 5000 : 80;
app.listen(port);