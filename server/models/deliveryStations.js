const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deliveryStationSchema = new Schema(
  {
    name: String,
    region: String,
    city: String,
    digitalAddress: String,
    customerService: String,
    email: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("PickUpStation", deliveryStationSchema);
