const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    customer: {
      type: String, // String for now but will actually be ObjectId
      require: true,
    },
    items: [
      {
        productId: {
          type: String, // String for now but will actually be ObjectId
        },
        quantity: Number,
        price: Number,
      },
    ],
    shippingAddress: {
      region: String,
      city: String,
      emai: String,
      number: String,
    },
    totalAmount: Number,
    currency: String,
    status: {
      type: String,
      default: 'pending',
      enum: ["pending", "delivered",],
    },
    deliveryAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PickUpStation",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
