require('dotenv').load();

const P = require('bluebird');
const faker = require('faker');
const models = require('./models');
const Customer = require('./models/customers');

Customer.deleteMany({}).then(() => {
  const promises = [];
  for (let i = 0 ; i < 150 ; ++i) {
    promises.push(Customer.create({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      birth_date: faker.date.past((Math.random() * (90-18) + 18), new Date()),
      phone: faker.phone.phoneNumber()
    }));
  }
  return P.all(promises).then(() => {
    console.log('Customers created');
  });
});
