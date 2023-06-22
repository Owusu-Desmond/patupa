const PickupStationList = require("../models/deliveryStations");
const OrderList = require("../models/orders");

// get all orders
const getAllOrders = async (req, res) => {
  const allOrders = await OrderList.find().sort({ status: -1, createdAt: -1 });
  const ordersInDetails = await Promise.all(
    allOrders.map(async (order) => {
      // get the customer details

      // get pickup station details
      const pickupStation = await PickupStationList.findById(
        order.deliveryAddress
      );

      if (!pickupStation) {
        return res
          .status(400)
          .json({ message: "Fail to get all orders", isSuccess: false });
      }

      return {
        ...order,
        deliveryAddress: pickupStation,
      };
    })
  );

  if (ordersInDetails) {
    return res.status(200).json({ data: ordersInDetails, isSucces: true });
  } else {
    return res
      .status(400)
      .json({ message: "Fail to get all orders", isSucces: false });
  }
};

// get all orders by a customer

// add new order
const addNewOrder = async (req, res) => {
  const {
    customer,
    items,
    shippingAddress,
    totalAmount,
    currency,
    deliveryAddress,
  } = req.body;

  // First to check if the customer exist in the database before allow to place an order

  const newOrder = await OrderList.create({
    customer,
    items,
    shippingAddress,
    totalAmount,
    currency,
    deliveryAddress,
  });

  if (!newOrder) {
    return res
      .status(400)
      .json({ message: "Opps! Fail to add new order", isSuccess: false });
  }

  return res.status(200).json({
    message: "Congratulation your order has been placed successfully",
    isSuccess: true,
  });
};

// get all order from a particular stattion
const getOrdersFromAStation = async (req, res) => {
  const { id } = req.query;
  const allOrders = await OrderList.findOne({ deliveryAddress: id }).sort({
    status: -1,
    createdAt: -1,
  });
  const ordersInDetails = await Promise.all(
    allOrders.map(async (order) => {
      // get the customer details
      return {
        ...order,
        customer: null,
      };
    })
  );

  if (ordersInDetails) {
    return res.status(200).json({ data: ordersInDetails, isSuccess: true });
  } else {
    return res
      .status(400)
      .json({ message: "Fail to get all orders", isSuccess: false });
  }
};

module.exports = { 
    getOrdersFromAStation, 
    addNewOrder, 
    getAllOrders 
};
