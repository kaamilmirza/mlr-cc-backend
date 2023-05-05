const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timetable = new Schema({
    branch : {
        type: String,
        required: true
    },
    year : {
        type: Number,
        required: true
    },
    section : {
        type: String,
        required: true
    },
    iamgeURL : {
        type: String,
        required: true
    },
});

const Nboard = mongoose.model('timetable', timetable);
module.exports = timetable;
