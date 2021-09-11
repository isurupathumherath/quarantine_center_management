const express = require("express");
const router = express.Router();

const {
  addOrders,
  getAllOrders,
  deleteOrder,
  getbyOrderId,
  getbyPatientId,
  getLastInserted,
} = require("../../controllers/foodcontroller/orderCtrl");

router.get("/", getAllOrders);
router.post("/", addOrders);
router.delete("/delete/:id", deleteOrder);
router.get("/getbypatient/:id", getbyPatientId);
router.get("/getbyorder/:id", getbyOrderId);
router.get("/getlastorder/", getLastInserted);

module.exports = router;
