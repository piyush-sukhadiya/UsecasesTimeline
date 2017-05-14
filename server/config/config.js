'use strict';

import path from 'path';

module.exports = {
    env: process.env.NODE_ENV,
    root: path.normalize(`${__dirname}/../..`),
    port: 9001,
    ip: '0.0.0.0',
    mongo: {
        // MongoDB URL
        uri: 'mongodb://localhost/usecaseTimeline',
        options: {

        }
    }
};