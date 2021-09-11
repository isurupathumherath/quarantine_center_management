const OrderDetailsModule = require("../../models/foodmodel/orderDetailsModule");

// exports.getAllOrderDetails = async (req, res) => {
//   try {
//     const allOrderDetails = await OrderDetailsModule.find();

//     console.log(allOrderDetails);
//     res.status(200).json(allOrderDetails);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// exports.addOrderDetails = (req, res) => {
//   const orderDetailID = req.body.orderDetailID;
//   const orderID = req.body.orderID;
//   const foodID = req.body.foodID;

//   const price = Number(req.body.price);
//   const status = Number(req.body.status);

//   const newOrderDetails = new OrderDetailsModule({
//     orderDetailID,
//     orderID,
//     foodID,
//     price,
//     status,
//   });

//   newOrderDetails
//     .save()
//     .then(() => {
//       res.json("Order Details Added");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(404).json({ message: error.message });
//     });
// };

// exports.deleteOrderDetails = (req, res) => {
//   let foodid = req.params.id;

//   //metana danne column name eka  : value eka
//   OrderDetailsModule.findOneAndRemove({ foodID: foodid }).exec((err, post) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//       res.json({
//         message: "Order details Deleted",
//       });
//     }
//   });
// };

// exports.getbyFoodId = (req, res) => {
//   let foodID = req.params.id;

//   const food = OrderDetailsModule.findOne({ foodID: foodID }).exec(
//     (err, post) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(post);
//       }
//     }
//   );
// };

// exports.getbyOrderDetailsId = (req, res) => {
//   let orderID = req.params.id;

//   const order = OrderDetailsModule.find({
//     orderID: orderID,
//   }).exec((err, post) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(post);
//     }
//   });
// };
//update eka ghnna

exports.getAllUsers = async (req, res) => {
  try {
    const allOrderDetails = await OrderDetailsModule.find();

    console.log(allOrderDetails);
    res.status(200).json(allOrderDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.AddUsers = (req, res) => {
  const userID = req.body.userID;
  const userName = req.body.userName;
  const Favourites = req.body.Favourites;

  const newOrderDetails = new OrderDetailsModule({
    userID,
    userName,
    Favourites,
  });

  newOrderDetails
    .save()
    .then(() => {
      res.json("Order Details Added");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: error.message });
    });
};

exports.updateUsers = async (req, res) => {
  let uid = req.params.id;
  const { userID, userName, Favourites } = req.body;

  const updateFood = { userID, userName, Favourites };

  //Metana findBiId dmmoth vada kranava findOneAndUpdate dmmama vda na.
  const update = await OrderDetailsModule.update(
    { _id: uid },
    { $set: { Favourites: Favourites } }
  )
    .then(() => {
      res.status(200).send({ status: "Food updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating food", error: err.message });
    });
};

exports.getbyId = (req, res) => {
  let id = req.params.id;

  const food = OrderDetailsModule.findOne({ userID: id }).exec((err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.send(post);
    }
  });
};
