const mongoose = require('mongoose');

const schema = mongoose.Schema({
  id: String,
  created_at: Date,
  updated_at: Date,
  price: Number,
  label: String,
  picture: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', schema);
