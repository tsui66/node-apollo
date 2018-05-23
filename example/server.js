'use strict';

require('node-apollo').setEnv(); // As early as possible in your application, require and configure dotenv.

const express = require('express');

// Read PORT & HOST from process.env
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
