const mongoose = require('mongoose');

const schema = mongoose.Schema({
  label: String,
  description: String,
  price: Number,
  material: String,
  color: String,
  image: String,
  createdAt: Date,
  updateAt: Date,
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', schema);
