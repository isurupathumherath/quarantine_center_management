const express = require("express");
const router = express.Router();

const {
  addOrders,
  getAllOrders,
  deleteOrder,
  getbyOrderId,
  getbyPatientId,
  getLastInserted,
  updateFoodOrderStatus,
} = require("../../controllers/foodcontroller/orderCtrl");

router.get("/", getAllOrders);
router.post("/", addOrders);
router.delete("/delete/:id", deleteOrder);
router.get("/getbypatient/:id", getbyPatientId);
router.get("/getbyorder/:id", getbyOrderId);
router.get("/getlastorder/", getLastInserted);
router.get("/getorderfood/:id/", updateFoodOrderStatus);

module.exports = router;
