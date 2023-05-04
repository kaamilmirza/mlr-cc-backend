
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ppostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    uid : {
        type: String,
        required: true
    },
    text : {
        type: String,
        required: true
    },
    link : {
        type: String,
        required: true
    },
    createdAt : {
        type: Date,
        default: Date.now
    },
    imageURL : {
        type: String,
    },
});

const Ppost = mongoose.model('Ppost', ppostSchema);
module.exports = Ppost;

