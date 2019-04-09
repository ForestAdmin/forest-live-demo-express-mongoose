const mongoose = require('mongoose');

const schema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  address: {
  	type: String,
  	ref: 'Address',
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Customer', schema);
