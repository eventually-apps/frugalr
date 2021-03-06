const express = require('express');
const dotenv = require('dotenv');

let app = express();
// Load env
dotenv.config({ path: './.env.local' });
dotenv.config({ path: './.env.development' });

// middleware
app.use(express.json());

// API routes 
app.use('/api/invoice', require('./src/api-routes/invoice'));

const currentEnv = process.env.NODE_ENV;
console.log("Current NODE_ENV is: " + currentEnv);

// in production serve static files from the dist folder
if (currentEnv === 'production') {
    console.log("setting the static folder...");
    // Set static folder
    app.use(express.static(__dirname + '/dist/'));

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/dist/index.html'));
}

let port = process.env.PORT;
console.log("current process port is: " + port);
if (typeof (port) === 'undefined' || port === null || port === '') {
    port = 5000;
}

console.log("will be listening on port " + port);
app.listen(port);