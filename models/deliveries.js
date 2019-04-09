const mongoose = require('mongoose');

const schema = mongoose.Schema({
  is_delivered: Boolean,
  lat: Number,
  lng: Number,
  phone: String,
  created_at: Date,
  update_at: Date
}, {
  timestamps: true
});

module.exports = mongoose.model('Delivery', schema);