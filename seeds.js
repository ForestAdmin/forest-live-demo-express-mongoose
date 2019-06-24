require('dotenv').load();
const mongoose = require('mongoose');

const P = require('bluebird');
const faker = require('faker');
const Customer = require('./models/customers');
const Project = require('./models/projects');


async function populate() {

  await Customer.deleteMany({}).then(() => {
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
    return P.all(promises);
  });

  await Project.deleteMany({}).then(() => {
    let userIndex = 150;
    const promises = [];
    return Customer.find({}).then((customers) => {
      for(let i = 2; i < 15; i++) {
        promises.push(Project.create({
          name: faker.name.jobTitle(),
          owner: customers[i]._id,
          members: [customers[--userIndex]._id, customers[--userIndex]._id, customers[--userIndex]._id, customers[--userIndex]._id],
        }));
      }
      return P.all(promises);
    })
  });
}

function connect() {
  return mongoose.connect('mongodb://forest:secret@127.0.0.1:27017/forest_demo');
}

function disconnect() {
  mongoose.connection.close();
}

connect().then(async () => {
  await populate();
  disconnect();
});

