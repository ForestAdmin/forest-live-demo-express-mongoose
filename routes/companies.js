const express = require('express');
const router = express.Router();

const Liana = require('forest-express-mongoose');
const Company = require('../models/companies');

router.post('/actions/mark-as-live', Liana.ensureAuthenticated, (req, res) => {
  let companyId = req.body.data.attributes.ids[0];

  return Company
    .findOneAndUpdate({ _id: companyId }, { $set: { status: 'live' }})
    .then(() => res.send({ success: 'Company is now live!' }));
});

module.exports = router;