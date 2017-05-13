'use strict';

import path from 'path';

export default function(app) {
    // All API's in application 
    app.use('/api/usecases', require('./api/useCase'));
}