const Liana = require('forest-express-mongoose');
const Address = require('../models/addresses');

Liana.collection('Order', {
  fields: [{
    field: 'delivery_address',
    type: 'String',
    reference: 'Address',
    get: function (order) {
      return Address
        .aggregate([
          {
            $lookup:
            {
              from: 'orders',
              localField: 'customer_id',
              foreignField: 'customer_id',
              as: 'orders_docs'
            }
          }, 
          {
            $match:
            {
              'orders_docs._id': order._id
            }
          }
        ])
        .then((addresses) => {
          if (addresses) { return addresses[0]._id; }
        });
    }
  }]
});