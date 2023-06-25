const mongoose = require("mongoose");
const { Schema } = mongoose;

const SpecialOffer = Schema({ // 
    name: { type: String},
    description: { type: String},
    discount: { type: Number},
    startDate: { type: Date},
    endDate: { type: Date},
}, { timestamps: true });

module.exports = mongoose.model("SpecialOffer", SpecialOffer);