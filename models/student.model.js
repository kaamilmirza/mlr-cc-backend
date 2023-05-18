const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  courseName: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  }
});

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  roll_number: {
    type: String,
    required: true,
    unique: true
  },
  cgpa: {
    type: Number,
    required: true
  },
  courses: {
    type: [courseSchema],
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);
const Course = mongoose.model('Course', courseSchema);
module.exports = {Student, Course};
