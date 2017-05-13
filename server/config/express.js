/**
 * Express configuration
 */

'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import config from './config';

export default function(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
}