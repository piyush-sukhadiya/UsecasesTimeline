'use strict';

import path from 'path';
import Usecase from './usecase.model';

function respondWithResult(res, statusCode) {
    statusCode = statusCode || 200;
    return function(entity) {
        if (entity) {
            return res.status(statusCode).json(entity);
        }
        return null;
    };
}

function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return function(err) {
        res.status(statusCode).send(err);
    };
}

// get List of use cases
export function getUseCases(req, res) {
    return Usecase.find().exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}


// Create new use case
export function createUseCase(req, res) {
    return Usecase.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}