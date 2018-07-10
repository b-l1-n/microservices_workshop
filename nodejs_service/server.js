'use strict';
const example_controller = require('./controllers/example')

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const application = express();

example_controller(application)

application.listen(PORT, HOST);
console.log(`Node Server Running on http://${HOST}:${PORT}`);
