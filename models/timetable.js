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
    imageURL : {
        type: String,
        required: true
    },
});

const tt = mongoose.model('timetable', timetable);
module.exports = tt;
