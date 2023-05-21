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

const Student_data = mongoose.model('Student_data', studentSchema);
const Course = mongoose.model('Course', courseSchema);
module.exports = {Student_data, Course};
