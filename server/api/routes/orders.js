const {
  addNewOrder,
  getAllOrders,
  getOrdersFromAStation,
} = require("../../controllers/orders");

module.exports = (router) => {
  // GET: list of all the orders
  router.get("/orders", getAllOrders);

  router.post("/orders", addNewOrder);

  router.get("/orders/station", getOrdersFromAStation);
};
