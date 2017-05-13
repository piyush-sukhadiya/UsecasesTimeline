'use strict';

import express from 'express';
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
import config from './config/config';
import http from 'http';
import dumpUsecases from './config/dumpData';

// Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
    console.error(`MongoDB error on connection: ${err}`);
    process.exit(-1);
});

mongoose.connection.once('open', function callback() {
    console.log('Database connected..');
    /*
     * Insert mock data into database.
     * Comment this out if you dont need to dump data every time on server start up
     */
    dumpUsecases();
});

// Configure express server
var app = express();
var server = http.createServer(app);
require('./config/express').default(app);
require('./routes').default(app);

// Start server
function startServer() {
    app.angularFullstack = server.listen(config.port, config.ip, function() {
        console.log('Server listening on %d', config.port);
    });
}

setImmediate(startServer);

exports = module.exports = app;