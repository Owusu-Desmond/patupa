const RatingAndReview = require('../models/ratingAndReview');
const Product = require("../models/product");

const getAllRatingsAndReviews = async (req, res) => {
    try {
        const ratingsAndReviews = await RatingAndReview.find()
        res.json({ success: true, ratingsAndReviews });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

const getRatingAndReviewById = async (req, res) => {
    try {
        const ratingAndReview = await RatingAndReview.findById(req.params.id)
        res.json({ success: true, ratingAndReview });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

const addNewRatingAndReview = async (req, res) => {
    const newRatingAndReview = new RatingAndReview(req.body)
    try {
        const ratingAndReview = await newRatingAndReview.save()
        res.json({ success: true, ratingAndReview });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

const getRatingAndReviewByProductId = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        const ratingAndReview = await RatingAndReview.find({ product: product._id })
        res.json({ success: true, ratingAndReview });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

module.exports = {
    getAllRatingsAndReviews,
    getRatingAndReviewById,
    addNewRatingAndReview,
    getRatingAndReviewByProductId
}