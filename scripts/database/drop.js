const connector = require('./connector');
const Customer = require('../../models/customers');
const Project = require('../../models/projects');

async function perform() {
    await connector.connect();
    await Customer.deleteMany({});
    await Project.deleteMany({});
}

perform().then(() => {
    console.log('Database has successfully been dropped');
    connector.disconnect();
}, (err) => {
    console.error(err.message);
    connector.disconnect();
});
