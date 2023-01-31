const mongoose = require('mongoose');

const classeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  teacher: {
    type: String,
    required: true
  },
  students: {
    type: Array,
    required: false
  }
});

const Classe = mongoose.model('Classe', classeSchema);

module.exports = Classe;
