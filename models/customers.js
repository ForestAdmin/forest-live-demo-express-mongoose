const mongoose = require('mongoose');

const schema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  avatar: String,
  birth_date: Date,
  phone: String,
  project: {type: mongoose.Schema.Types.ObjectId, ref: 'Project'},
}, {
  timestamps: true
});

module.exports = mongoose.model('Customer', schema);
