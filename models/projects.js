const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    },
    members: [{type: mongoose.Schema.Types.ObjectId, ref: 'Customer'}],
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', schema);
