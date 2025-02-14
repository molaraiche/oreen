const { getAllCars, addCar } = require("../controllers/carsController");
const router = require("express").Router();
const upload = require("../utils/imageUploader");

router.get("/", getAllCars);
router.post(
  "/addCar",
  [
    upload.fields([
      { name: "mainImage", maxCount: 1 },
      { name: "secondaryImages", maxCount: 10 },
      { name: "video", maxCount: 1 },
    ]),
  ],
  addCar
);

module.exports = router;
