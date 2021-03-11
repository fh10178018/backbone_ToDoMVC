'use strict';

const path = require('path');


let config = {
    title: 'PACK',
    env: 'dev',
    appName: 'PACK',
    port: 3000,
    viewDir: path.join(__dirname, '..', 'views'),
    staticDir: path.join(__dirname, '..', 'static'),
};


module.exports = config;