const Liana = require('forest-express-mongoose');
const Company = require('../models/companies');

Liana.collection('Company', {
  actions: [{ 
    name: 'Mark as Live'
  }],
  fields: [{
    field: 'nameStatus',
    type: 'String',
    get: (company) => {
      return company.name + ' ' + company.status;
    }
  }]
});