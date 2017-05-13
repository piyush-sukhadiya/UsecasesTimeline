/**
 * Dump mock data into database.
 * // Json file can also be dumbed into mongoDB manually.
 */

'use strict';

import Usecase from '../api/useCase/usecase.model';
import usecaseData from './mockData/Usecasedata';

export default function dumpUsecases() {
    Usecase.find({}).remove()
        .then(() => Usecase.create(usecaseData))
        .then(() => console.log('Inserted all mock usecases.'))
        .catch(err => console.log('Error on mock usecases insertion', err));
}