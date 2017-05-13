'use strict';

import mongoose, { Schema } from 'mongoose';

var MilestoneSchema = new Schema({
    "name": String,
    "name_de": String,
    "name_en": String,
    "start_date": Date,
    "end_date": Date,
    "usecase": Number
});

var UsecaseSchema = new Schema({
    title: String,
    body: String,
    milestones: [MilestoneSchema],
});

export default mongoose.model('Usecase', UsecaseSchema);