const mongoose = require('mongoose');
const { Schema } = mongoose;

const RatingAndReview = Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer", // reference to the Customer model to access the customer's details
    },
    rating: { 
        type: Number, 
        min: [1, 'Rating must be at least 1, got {VALUE}'],
        max: [10, 'Rating must be at most 10, got {VALUE}']
    },
    review: { type: String},
}, { timestamps: true });

module.exports = mongoose.model('RatingAndReview', RatingAndReview);