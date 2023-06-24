const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
    name: { type: String, required: true,},
    price: { type: Number, require: true,},
    images: [
        {
            type: String,
            require: true,
        },
    ],
    mainCategory: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category", // Reference to the Category model to access the main category of a product
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category", // Reference to the Category model to access the sub category of a product
    },
    description: { type: String, require: true,},
    brand: { type: String, require: true, },
    ratingsAndReviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RatingAndReview", // 
        },
    ],
    quantity: { type: Number, require: true,},
    variants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Variant",
        },
    ],
    availability: { type: Boolean, require: true, default: true,},
    specialOffers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SpecialOffer",
        },
    ],
    specifications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Specification",   
        },
    ],
    additionalInformation: { type: String},
    sku: { type: String},
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
