const Cars = require("../model/carsModel");

const getAllCars = async (req, res) => {
  try {
    const response = await Cars.find().exec();
    res.status(200).json({ cars: response });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in Cars Fetching",
      error: error.message,
    });
  }
};
const addCar = async (req, res) => {
  try {
    const { name, description, brand, model, rate, type, condition } = req.body;
    if (
      !name ||
      !description ||
      !brand ||
      !model ||
      !rate ||
      !type ||
      !condition
    ) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    const mainImage = req.files?.mainImage
      ? {
          url: req.files.mainImage[0].path,
          public_id: req.files.mainImage[0].filename,
        }
      : null;
    const secondaryImages = req.files?.secondaryImages
      ? req.files.secondaryImages.map((file) => ({
          url: file.path,
          public_id: file.filename,
        }))
      : [];
    const video = req.files?.video
      ? {
          url: req.files.video[0].path,
          public_id: req.files.video[0].filename,
        }
      : null;

    const newCar = new Cars({
      name,
      description,
      brand,
      model,
      rate,
      type,
      condition,
      mainImage,
      secondaryImages,
      video,
    });
    const savedCar = await newCar.save();
    res.status(201).json({
      message: "Car added successfully",
      car: savedCar,
    });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in Cars Adding",
      error: error.message,
    });
  }
};
// const carUpdate = async (req, res) => {
//   try {
//   } catch (error) {
//     res.status(500).json({
//       message: "There is an error in Cars Updating",
//       error: error.message,
//     });
//   }
// };

// const carDelete = async (req, res) => {
//   try {
//   } catch (error) {
//     res.status(500).json({
//       message: "There is an error in Cars Deleting",
//       error: error.message,
//     });
//   }
// };

module.exports = { getAllCars, addCar };
