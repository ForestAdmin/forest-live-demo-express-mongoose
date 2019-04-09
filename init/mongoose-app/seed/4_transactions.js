'use strict';
require('dotenv').load();
const P = require('bluebird');
const mongoose = require('mongoose');
const faker = require('faker');
const models = require('../../../models');
const Company = require('../../../models/companies');
const Transaction = require('../../../models/transactions');

var iteration = [];

for (let i = 0 ; i < 1000 ; ++i) {
	iteration.push(i);
}

return P.all(P.each(iteration, () => {
	let amount = faker.finance.amount(1, 2000) * 100;
	let vat_amount = 0.21 * amount;
	let fee_amount = 0.02 * amount;
	let statusPossibilities = ['to_validate', 'rejected', 'validated'];

	return Company
	    .aggregate([
	    	{ $match: { status: 'live' } },
	    	{ $sample: { size: 1 } }
	    ])
	    .then((beneficiaryCompany) => {
			return Company
			    .aggregate([
			    	{ $match: { status: 'live' } },
			    	{ $sample: { size: 1 } }
		    	])
	    .then((emitterCompany) => {
			return Transaction.create({
				beneficiary_iban: faker.finance.iban(),
				emitter_iban: faker.finance.iban(),
				vat_amount: vat_amount,
				amount: amount,
				fee_amount: fee_amount,
				note: faker.lorem.lines(2),
				emitter_bic: faker.finance.bic(),
				beneficiary_bic: faker.finance.bic(),
				reference: faker.random.alphaNumeric(8),
				created_at: faker.date.between(new Date(2017,1,1), new Date()),
				emitter_company_id: emitterCompany[0]._id,
				beneficiary_company_id: beneficiaryCompany[0]._id,
				status: statusPossibilities[Math.floor(Math.random() * statusPossibilities.length)]
			}).then((transaction) => {
				return Company.findOneAndUpdate({
					_id: emitterCompany[0]._id
				}, {
					$push: { emitted_transactions: transaction }
				}).then((transaction) => {
					return Company.findOneAndUpdate({
						_id: beneficiaryCompany[0]._id
					}, {
						$push: { received_transactions: transaction }
					});
				});
			});
		});
	});
}))
.then(() => process.exit(0));