'use strict';
require('dotenv').load();
const P = require('bluebird');
const mongoose = require('mongoose');
const faker = require('faker');
const models = require('../../../models');
const Company = require('../../../models/companies');

var iteration = [];

for (let i = 0 ; i < 1000 ; ++i) {
	iteration.push(i);
}

return P.all(P.each(iteration, () => {
	let statusPossibilities = ['signed_up', 'pending', 'approved', 'rejected', 'live'];

	return Company.create({
		name: faker.company.companyName(),
		headquarter: faker.address.city(),
		industry: faker.company.catchPhraseNoun(),
		description: faker.lorem.sentence(),
		status: statusPossibilities[Math.floor(Math.random() * statusPossibilities.length)],
	});
}))
.then(() => process.exit(0));