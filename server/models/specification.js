const mongoose = require('mongoose');
const { Schema } = mongoose;

const Specification = Schema({
    name: { type: String},
    value: { type: String},
}, { timestamps: true });

module.exports = mongoose.model('Specification', Specification);