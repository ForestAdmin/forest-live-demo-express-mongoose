const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: String,
  headquarter: String,
  industry: String,
  description: String,
  status: {
  	type: String,
  	enum: ['signed_up', 'pending', 'approved', 'rejected', 'live']
  },
  bank_statement_id: String,
  certificate_of_incorporation_id: String,
  passport_id: String,
  proof_of_address_id: String,
  emitted_transactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaction'
  }],

  received_transactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaction'
  }],
  created_at: Date,
  updated_at: Date
}, {
  timestamps: true
});

module.exports = mongoose.model('Company', schema);
