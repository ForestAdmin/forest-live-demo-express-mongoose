require('dotenv').config();
const mongoose = require('mongoose');

/**
 * Create a connection to the DB
 */
const connect = () => {
    return mongoose.connect(process.env.DATABASE_URL);
};

/**
 * Disconnect from the DB
 */
const disconnect = () => {
    return mongoose.connection.close();
};

exports.connect = connect;
exports.disconnect = disconnect;
