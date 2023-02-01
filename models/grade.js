const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  subject_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  score: {
    type: Number,
    required: true
  }
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;
