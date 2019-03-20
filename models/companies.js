const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: String,
  status: {
  	type: String,
  	enum: ['signed_up', 'pending', 'approved', 'rejected', 'live']
  },
  headquarter: String,
  industry: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Company', schema);
