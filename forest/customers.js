const Liana = require('forest-express-mongoose');
const Address = require('../models/addresses');
const _ = require('lodash');

Liana.collection('Customer', {
  fields: [{
    field: 'fullname',
    type: 'String',
    get: (customer) => {
      return customer.firstname + ' ' + customer.lastname;
    },
    set: (customer, fullname) => {
      let names = fullname.split(' ');
      customer.firstname = names[0];
      customer.lastname = names[1];

      return customer;
    },
    search: function (query, search) {
      let names = search.split(' ');

      query._conditions.$or.push({
        firstname: names[0],
        lastname: names[1]
      });

      return query;
    }
  }, {
    field: 'full address',
    type: 'String',
    get: (customer) => {
      return Address
        .findOne({ customer_id: customer.id })
        .then((address) => {
          return address.address_line_1 + '\n' +
            address.address_line_2 + '\n' +
            address.address_city + ' ' + address.country;
        });
    }
  }]
});