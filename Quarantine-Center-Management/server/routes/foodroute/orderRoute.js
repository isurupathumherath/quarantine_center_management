const express = require("express");
const router = express.Router();

const {
  addOrders,
  getActiveOrders,
  getCompletedOrders,
  getAllOrders,
  deleteOrder,
  getbyOrderId,
  getbyPatientId,
  getLastInserted,
  updateOrderStatus,
  // updateFoodOrderStatus,
} = require("../../controllers/foodcontroller/orderCtrl");

router.get("/", getAllOrders);
router.get("/active", getActiveOrders);
router.get("/complete", getCompletedOrders);
router.post("/", addOrders);
router.delete("/delete/:id", deleteOrder);
router.get("/getbypatient/:id", getbyPatientId);
router.get("/getbyorder/:id", getbyOrderId);
router.get("/getlastorder/", getLastInserted);
router.put("/updateorderstatus/:id", updateOrderStatus);
// router.put("/getorderfood/:id/:fid", updateFoodOrderStatus);

module.exports = router;
