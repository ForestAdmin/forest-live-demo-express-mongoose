const P = require('bluebird');
const express = require('express');
const router = express.Router();
const Liana = require('forest-express-mongoose');
const Customers = require('../models/customers');
const mongoose = require('mongoose');

router.get('/Product/:product_id/relationships/buyers', 
  Liana.ensureAuthenticated, (req, res, next) => {
    let limit = parseInt(req.query.page.size) || 10;
    let offset = (parseInt(req.query.page.number) - 1) * limit;

    let countQuery = Customers.aggregate([
          {
            $lookup:
            {
              from: 'orders',
              localField: 'orders',
              foreignField: '_id',
              as: 'orders_docs'
            }
          },
          {
            $unwind: "$orders_docs"
          },
          {
            $lookup:
            {
              from: 'products',
              localField: 'orders_docs._id',
              foreignField: 'orders',
              as: 'products_docs'
            }
          },
          {
            $match:
            {
              'products_docs._id': mongoose.Types.ObjectId(req.params.product_id)
            }
          },
          {
            $count: "products_docs"
          }
        ]);

    let dataQuery = Customers.aggregate([
          {
            $lookup:
            {
              from: 'orders',
              localField: 'orders',
              foreignField: '_id',
              as: 'orders_docs'
            }
          },
          {
            $unwind: "$orders_docs"
          },
          {
            $lookup:
            {
              from: 'products',
              localField: 'orders_docs._id',
              foreignField: 'orders',
              as: 'products_docs'
            }
          },
          {
            $match:
            {
              'products_docs._id': mongoose.Types.ObjectId(req.params.product_id)
            }
          }
        ]);

    return P
      .all([
        countQuery,
        dataQuery
      ])
      .spread((count, customers) => {
        return new Liana.ResourceSerializer(Liana, Customers, customers, null, {}, {
          count: count.orders_count
        }).perform();
      })
      .then((products) => {
        res.send(products);
      })
      .catch((err) => next(err));
  });

module.exports = router;