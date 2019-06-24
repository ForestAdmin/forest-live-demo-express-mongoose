const connector = require('./connector');
const Customer = require('../../models/customers');
const Project = require('../../models/projects');
const P = require('bluebird');
const faker = require('faker');

async function perform() {
    await connector.connect();
    let promises = [];
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

    await P.all(promises);
    promises = [];

    let userIndex = 150;
    const createdCustomers = await Customer.find({});
    for(let i = 2; i < 15; i++) {
        promises.push(Project.create({
            name: faker.name.jobTitle(),
            owner: createdCustomers[i]._id,
            members: [createdCustomers[--userIndex]._id, createdCustomers[--userIndex]._id, createdCustomers[--userIndex]._id, createdCustomers[--userIndex]._id],
        }));
    }

    return P.all(promises);
}

perform().then(() => {
   console.log('Your database has successfully been filed');
   connector.disconnect();
}, (err) => {
    console.error(err.message);
    connector.disconnect();
});
