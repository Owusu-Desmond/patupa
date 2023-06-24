const mongoose = require('mongoose');
const { Schema } = mongoose;

const Variant = Schema({
    name: { type: String, require: true,},
    price: { type: Number, require: true,},
    images: [
        {
            type: String,
            require: true,
        },
    ],
    quantity: { type: Number, require: true,},
    sku: { type: String, require: true,},
}, { timestamps: true });

module.exports = mongoose.model('Variant', Variant);