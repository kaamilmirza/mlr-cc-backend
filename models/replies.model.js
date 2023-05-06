const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
    text: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    },
    username : {
        type: String,
        required: true,
        unique: false,
    },
    createdAt: {
        type: Date,
        Date: Date.now
    },
    imageUrl: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;

