const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    id: {
        type: Object,
        
    },
    comments : {
        type: Array,
        required: false,
        unique: false,
        trim: true,
    },
    createdAt: {
        type: Date,
        Date: Date.now
    }
}, {
    timestamps: true,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
