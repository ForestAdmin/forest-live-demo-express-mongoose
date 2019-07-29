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
            email: 'test',
            avatar: faker.image.avatar(),
            birth_date: faker.date.past((Math.random() * (90-18) + 18), new Date()),
            phone: faker.phone.phoneNumber()
        }));
    }
    await P.all(promises);
    promises = [];

    const createdCustomers = await Customer.find({});

    for(let i = 0; i < 150; i++) {
        const project = await Project.create({
            name: faker.name.jobTitle(),
            owner: createdCustomers[i]._id,
            members: [createdCustomers[i%150], createdCustomers[(i+1)%150], createdCustomers[(i+2)%150]],
        });
        createdCustomers[i].project = project._id;
        promises.push(createdCustomers[i].save());
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
