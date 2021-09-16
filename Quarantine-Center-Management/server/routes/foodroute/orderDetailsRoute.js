const express = require("express");
const router = express.Router();

const {
  // addOrderDetails,
  // getAllOrderDetails,
  // deleteOrderDetails,
  // getbyFoodId,
  // getbyOrderDetailsId,
  getAllUsers,
  AddUsers,
  updateUsers,
  getbyId,
  deleteFromFavourite,
} = require("../../controllers/foodcontroller/orderDetailsCtrl");

// router.post("/", addOrderDetails);
// router.get("/", getAllOrderDetails);
// router.delete("/delete/:id", deleteOrderDetails);
// router.get("/getbyfood/:id", getbyFoodId);
// router.get("/getbyorderdetailsid/:id", getbyOrderDetailsId);
router.get("/getallusers/", getAllUsers);
router.post("/addusers/", AddUsers);
router.put("/updateusers/:id", updateUsers);
router.get("/getUserbyid/:id", getbyId);
router.put("/deletefromfavourite/:id/:fid", deleteFromFavourite);
module.exports = router;
