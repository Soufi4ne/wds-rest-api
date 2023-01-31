const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  teacher: {
    type: String,
    required: true
  }
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
