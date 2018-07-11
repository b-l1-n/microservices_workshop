'use strict';
const service = require('../services/foo');
const os = require('os');

module.exports = function (application) {

    application.get('/foo', (request, response) => {
        response.header('x-origin', [os.hostname()]);
        response.send(service.foo());
    });
};
