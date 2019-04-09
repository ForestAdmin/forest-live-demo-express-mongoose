const Liana = require('forest-express-mongoose');
const Product = require('../models/products');

Liana.collection('Product', {
  fields: [{
    field: 'buyers',
    type: ['String'],
    reference: 'Customer'
  }],
  segments: [{
    name: 'Bestsellers',
    where: (product) => {
      return Product
      	.aggregate([
		    {
		        $project: { orders_count: {$size: { "$ifNull": [ "$orders", [] ] } } }
		    }, 
		    {   
		        $sort: {"orders_count":-1} 
		    },
		    { 
		    	$limit: 5
		    }
		])
        .then((products) => {
          let productIds = [];
          products.filter((product) => {
            if (product._id.length === 0) { return false; }
            return true; 
          })
          .forEach((product) => {
          	productIds.push(product._id);
          });
		  return {"_id": { $in: productIds} };
	  });
    }
  }]
});