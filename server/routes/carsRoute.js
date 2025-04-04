const express = require("express");
const router = express.Router();
const {
  getAllCars,
  getCarById,
  addCar,
  carUpdate,
  carDelete,
} = require("../controllers/carsController");

router.get("/", getAllCars);
router.get("/:id", getCarById);
router.post("/addCar", addCar);
router.put("/:id", carUpdate);
router.delete("/:id", carDelete);
module.exports = router;
