const express = require("express");
const router = express.Router();

const {
  getComments,
  addComments,
  getbyId,
} = require("../../controllers/foodcontroller/commentCtrl");

router.get("/", getComments);
router.post("/", addComments);
router.get("/get/:id", getbyId);

module.exports = router;
