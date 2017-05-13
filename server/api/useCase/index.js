'use strict';

var express = require('express'),
    controller = require('./usecase.controller'),
    router = express.Router();

router.get('/', controller.getUseCases);
router.post('/', controller.createUseCase);

module.exports = router;