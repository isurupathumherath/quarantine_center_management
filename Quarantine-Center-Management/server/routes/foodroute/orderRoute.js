const express = require("express");
const router = express.Router();

const {
  addOrders,
  getActiveOrders,
  getCompletedOrders,
  getAllOrders,
  deleteOrder,
  getbyOrderId,
  getactiveByPatientId,
  getcompletedByPatientID,
  getLastInserted,
  updateOrderStatus,
  updateFoodOrderStatus,
  getallbypatient,
  getByYear,
} = require("../../controllers/foodcontroller/orderCtrl");

router.get("/", getAllOrders);
router.get("/active", getActiveOrders);
router.get("/complete", getCompletedOrders);
router.post("/", addOrders);
router.delete("/delete/:id", deleteOrder);
router.get("/getactivebypatient/:id", getactiveByPatientId);
router.get("/getcompletedbypatient/:id", getcompletedByPatientID);
router.get("/getallbypatientid/:id", getallbypatient);
router.get("/getbyorder/:id", getbyOrderId);
router.get("/getlastorder/", getLastInserted);
router.put("/updateorderstatus/:id", updateOrderStatus);
router.put("/changefoodstatus/:fid", updateFoodOrderStatus);
router.get("/getbyyear/:from/:to", getByYear);

module.exports = router;
