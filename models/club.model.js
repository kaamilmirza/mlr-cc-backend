const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clubform = new Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    clubname : {
        type: String,
        required: true
    },
    date : {
        type: String,
        required: true
    },
    venue : {
        type: String,
    },
    createdAt : {
        type: Date,
        default: Date.now
    },
    link : {
        type: String,
    },
    imageURL : {
        type: String,
    },

});

const Nboard = mongoose.model('club', clubform);
module.exports = Nboard;
