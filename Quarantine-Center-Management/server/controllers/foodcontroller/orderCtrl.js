const OrderModule = require("../../models/foodmodel/orderModule");

exports.getAllOrders = async (req, res) => {
  try {
    const allOrders = await OrderModule.find();

    console.log(allOrders);
    res.status(200).json(allOrders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//Getting the last inserted
exports.getLastInserted = async (req, res) => {
  try {
    const lastOrder = await OrderModule.find().sort({ _id: -1 }).limit(1);
    console.log(lastOrder);
    res.status(200).json(lastOrder);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.addOrders = (req, res) => {
  const orderID = req.body.orderID;
  const patientID = req.body.patientID;
  const instructions = req.body.instructions;
  const orderDetails = req.body.orderDetails;
  const orderdate = Date(req.body.orderdate);
  const deliveryDate = req.body.deliveryDate;
  const total = Number(req.body.total);
  const status = Number(req.body.status);

  const newOrder = new OrderModule({
    orderID,
    patientID,
    orderdate,
    total,
    status,
    deliveryDate,
    instructions,
    orderDetails,
  });

  newOrder
    .save()
    .then(() => {
      res.json("Order Added");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: error.message });
    });
};

exports.deleteOrder = (req, res) => {
  let orderID = req.params.id;

  //metana danne column name eka  : value eka
  OrderModule.findOneAndRemove({ orderID: orderID }).exec((err, post) => {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
      res.json({
        message: "Order Deleted",
      });
    }
  });
};

exports.getbyOrderId = (req, res) => {
  let orderID = req.params.id;

  const food = OrderModule.findOne({ orderID: orderID }).exec((err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.send(post);
    }
  });
};

exports.getbyPatientId = (req, res) => {
  let patientID = req.params.id;

  const food = OrderModule.find({ patientID: patientID }).exec((err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.send(post);
    }
  });
};
