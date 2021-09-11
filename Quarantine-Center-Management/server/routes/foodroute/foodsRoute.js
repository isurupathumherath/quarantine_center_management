const express = require("express");
const router = express.Router();

const {
  getFoods,
  addFoods,
  updateFoods,
  deleteFoods,
  getbyId,
  getActiveFoods,
} = require("../../controllers/foodcontroller/foodsCtrl");

router.get("/", getFoods);
router.post("/", addFoods);
router.put("/update/:id", updateFoods);
router.delete("/delete/:id", deleteFoods);
router.get("/get/:id", getbyId);
router.get("/getActive/", getActiveFoods);

module.exports = router;
