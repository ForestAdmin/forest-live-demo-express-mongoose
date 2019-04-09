const mongoose = require('mongoose');

const schema = mongoose.Schema({
  beneficiary_company_id: {
  	type: mongoose.Schema.Types.ObjectId,
  	ref: 'Company'
  },
  emitter_company_id: {
  	type: mongoose.Schema.Types.ObjectId,
  	ref: 'Company'
  },
  beneficiary_bic: String,
  beneficiary_iban: String,
  emitter_bic: String,
  emitter_iban: String,
  fee_amount: Number,
  vat_amount: Number,
  note: String,
  reference: String,
  status: {
  	type: String,
  	enum: ['to_validate', 'rejected', 'validated']
  },
  created_at: Date,
  updated_at: Date,
}, {
  timestamps: true
});

module.exports = mongoose.model('Transaction', schema);
