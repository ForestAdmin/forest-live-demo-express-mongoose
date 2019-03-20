const mongoose = require('mongoose');

const schema = mongoose.Schema({
  created_at: Date,
  beneficiary: String,
  emitter: String,
  amount: Number,
  status: {
  	type: String,
  	enum: ['to_validate', 'rejected', 'validated']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Transaction', schema);
