const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attn = new Schema({
    rno : {
        type: String,
        required: true
    },
    attendance : {
        type: Number,
        required: true
    },
});

const atten = mongoose.model('attendance', attn);
module.exports = atten;
