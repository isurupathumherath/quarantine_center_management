const express = require("express");
const router = express.Router();

const {
  getFoods,
  addFoods,
  updateFoods,
  deleteFoods,
  getbyId,
  getActiveFoods,
  getBreakfastFoods,
  getDinnerFoods,
  getLunchFoods,
  getAppetizers,
  getBeveragers,
  getDesserts,
} = require("../../controllers/foodcontroller/foodsCtrl");

router.get("/", getFoods);
router.post("/", addFoods);
router.put("/update/:id", updateFoods);
router.delete("/delete/:id", deleteFoods);
router.get("/get/:id", getbyId);
router.get("/getActive/", getActiveFoods);
router.get("/getbreakfastactive/", getBreakfastFoods);
router.get("/getdinneractive/", getDinnerFoods);
router.get("/getlunchactive/", getLunchFoods);
router.get("/getappetizersactive/", getAppetizers);
router.get("/getbeverageactive/", getBeveragers);
router.get("/getdesertsactive/", getDesserts);

module.exports = router;
