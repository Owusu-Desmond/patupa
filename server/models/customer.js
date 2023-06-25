const mongoose = require('mongoose')

const { Schema } = mongoose

const customerSchema = new Schema({
    username: { type: String, required: true, unique: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    phoneNumber: { type: String, require: true, unique: true },
    password: { 
        type: String,
        require: true,
        minlength: 8,
        maxlength: 20,
    },
    location: {
        region: String,
        city: String,
        streetAddress: String,
        digitalAddress: String,
    },
    photo: {
        type: String,
        require: true,
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order", // reference to the Order model to access the customer's orders
        },
    ],
}, { timestamps: true })

module.exports = mongoose.model('Customer', customerSchema)