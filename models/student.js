const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: false
  },
  subjects: {
    type: Array,
    required: false
  },
  grades: {
    type: Array,
    required: false
  }
  
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
