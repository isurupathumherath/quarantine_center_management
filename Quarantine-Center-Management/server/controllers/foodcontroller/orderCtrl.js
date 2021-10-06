const orderModule = require("../../models/foodmodel/orderModule");
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

exports.getActiveOrders = async (req, res) => {
  let st1 = 1;
  try {
    const allOrders = await OrderModule.find({ status: st1 });

    console.log(allOrders);
    res.status(200).json(allOrders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
exports.getCompletedOrders = async (req, res) => {
  let st1 = 2;
  try {
    const allOrders = await OrderModule.find({ status: st1 });

    console.log(allOrders);
    res.status(200).json(allOrders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//For generating reports
exports.getByYear = async (req, res) => {
  let start = req.params.from;
  let end = req.params.to;
  try {
    const allOrders = await OrderModule.find({
      orderedDate: { $gte: start, $lt: end },
    });

    console.log(allOrders);
    res.status(200).json(allOrders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getByDate = async (req, res) => {
  let start = req.params.from;
  let end = "2021-11";
  try {
    const allOrders = await OrderModule.find({
      orderedDate: { $gte: start, $lt: end },
    });

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
      res.status(404).send(`No Order with that id: ${orderID}`);
      console.log(err);
    } else {
      console.log(post);
      res.json({
        message: "Order Successfully Deleted",
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

exports.getactiveByPatientId = (req, res) => {
  let patientID = req.params.id;
  let st1 = 1;

  const food = OrderModule.find({ patientID: patientID, status: st1 }).exec(
    (err, post) => {
      if (err) {
        console.log(err);
      } else {
        res.send(post);
      }
    }
  );
};

exports.getallbypatient = (req, res) => {
  let patientID = req.params.id;

  const food = OrderModule.find({ patientID: patientID }).exec((err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.send(post);
    }
  });
};

exports.getcompletedByPatientID = (req, res) => {
  let patientID = req.params.id;
  let st1 = 2;
  const food = OrderModule.find({ patientID: patientID, status: st1 }).exec(
    (err, post) => {
      if (err) {
        console.log(err);
      } else {
        res.send(post);
      }
    }
  );
};

exports.updateOrderStatus = async (req, res) => {
  let oid = req.params.id;
  const { status } = req.body;

  const updateFood = { status };

  //Metana findBiId dmmoth vada kranava findOneAndUpdate dmmama vda na.
  const update = await OrderModule.update(
    { _id: oid },
    { $set: { status: status } }
  )
    .then(() => {
      res.status(200).send({ status: "Order Status updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: "Error with updating Order status",
        error: err.message,
      });
    });
};

exports.updateFoodOrderStatus = (req, res) => {
  let foodID = req.params.fid;

  const { status } = req.body;
  OrderModule.update(
    { "orderDetails._id": foodID },
    { $set: { "orderDetails.$.status": status } }
  ).exec((err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.send(post);
    }
  });
  // const order = OrderModule.find({
  //   orderDetails: { $elemMatch: { _id: foodID } },
  // }).exec((err, post) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.send(post);
  //   }
  // });
};
