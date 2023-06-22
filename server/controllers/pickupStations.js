const PickupStationList = require("../models/deliveryStations");

// get all pickup stations
const getAllStations = async (req, res) => {
  const stations = await PickupStationList.find();

  return res.status(200).json(stations);
};

// add new pickup station
const AddNewStation = async (req, res) => {
  const {
    name,
    region,
    city,
    digitalAddress,
    customerService,
    email,
    description,
  } = req.body;

  const newStation = await PickupStationList.create({
    name,
    region,
    city,
    digitalAddress,
    customerService,
    email,
    description,
  });

  if (!newStation) {
    return res
      .status(400)
      .json({ message: "Failed to add new pickup station", isSuccess: false });
  }

  return res
    .status(200)
    .json({
      message: `You have successfuly added ${newStation.name}, ${newStation.region} to the pickup stations `,
      isSuccess: true,
    });
};

module.exports = {AddNewStation, getAllStations}