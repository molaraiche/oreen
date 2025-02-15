const express = require("express");
const router = express.Router();
const {
  getAllCars,
  addCar,
  carUpdate,
  carDelete,
} = require("../controllers/carsController");
const upload = require("../utils/imageUploader");
router.get("/", getAllCars);
router.post(
  "/addCar",
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "secondaryImages", maxCount: 10 },
    { name: "video", maxCount: 1 },
  ]),
  addCar
);
router.put(
  "/:id",
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "secondaryImages", maxCount: 10 },
    { name: "video", maxCount: 1 },
  ]),
  carUpdate
);
router.delete("/:id", carDelete);
module.exports = router;
