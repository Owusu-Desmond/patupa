const {
    AddNewStation,
    getAllStations
  } = require("../../controllers/pickupStations");
  
  module.exports = (router) => {
    // GET: list of all the stations
    router.get("/stations", getAllStations);
  
    router.post("/stations", AddNewStation);

  };
  