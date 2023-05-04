//student model for learning management system

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rno : {
        type: Number,
        required: true
    },
    uid : {
        type: String,
        required: true
    },
    joiningDate: {
        type: Date,
        default: Date.now
    },
    branch: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },  
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;



