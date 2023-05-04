const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nboardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    hastag : {
        type: String,
        required: true
    },
    createdAt : {
        type: Date,
        default: Date.now
    },
    link : {
        type: String,
    },
});

const Nboard = mongoose.model('Nboard', nboardSchema);
module.exports = Nboard;
