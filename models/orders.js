const mongoose = require('mongoose');

const schema = mongoose.Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  delivery_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Delivery'
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  ref: String,
  shipping_status: {
  	type: String,
  	enum: ['In transit', 'Shipped', 'Ready for shipping', 'Being processed']
  },
  ready_for_shipping_at: Date,
  shipped_at: Date,
  in_transit_at: Date,
  being_processed_at: Date,
  created_at: Date,
  update_at: Date
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', schema);