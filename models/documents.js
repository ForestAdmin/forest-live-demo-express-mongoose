const mongoose = require('mongoose');

const schema = mongoose.Schema({
  is_verified: Boolean,
  file_id: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Document', schema);