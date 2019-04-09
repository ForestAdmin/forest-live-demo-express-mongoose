const mongoose = require('mongoose');

const schema = mongoose.Schema({
  address_line_1: String,
  address_line_2: String,
  address_city: String,
  country: String,
  customer_id: {
  	type: mongoose.Schema.Types.ObjectId,
  	ref: 'Customer'
  },
  createdAt: Date,
  updateAt: Date
}, {
  timestamps: true
});

module.exports = mongoose.model('Address', schema);