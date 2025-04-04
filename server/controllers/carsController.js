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

const getCarById = async (req, res) => {
  try {
    const response = await Cars.findById(req.params.id).exec();
    if (!response) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.status(200).json({ car: response });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in fetching the car",
      error: error.message,
    });
  }
};

const addCar = async (req, res) => {
  try {
    const {
      name,
      model,
      brand,
      description,
      type,
      condition,
      price,
      mainImage,
      secondaryImages,
      video,
      hot,
    } = req.body;

    if (
      !name ||
      !model ||
      !brand ||
      !price ||
      !description ||
      !type ||
      !condition ||
      !mainImage ||
      !hot
    ) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const newCar = new Cars({
      name,
      model,
      brand,
      description,
      type,
      condition,
      price,
      mainImage,
      secondaryImages,
      video,
      hot,
    });

    const savedCar = await newCar.save();
    res.status(201).json({ message: "Car added successfully", car: savedCar });
  } catch (error) {
    console.error("Error adding car:", error);
    res.status(500).json({
      message: "There was an error adding the car.",
      error: error.message,
    });
  }
};

const carUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      name,
      description,
      brand,
      model,
      type,
      condition,
      price,
      mainImage,
      secondaryImages,
      video,
      hot,
    } = req.body;

    const existingCar = await Cars.findById(id);
    if (!existingCar) {
      return res.status(404).json({ message: "Car not found" });
    }

    const updateFields = {
      name,
      description,
      brand,
      model,
      price,
      type,
      condition,
      hot,
    };

    if (mainImage) updateFields.mainImage = mainImage;
    if (secondaryImages) updateFields.secondaryImages = secondaryImages;
    if (video) updateFields.video = video;

    const updatedCar = await Cars.findByIdAndUpdate(id, updateFields, {
      new: true,
    });
    res
      .status(200)
      .json({ message: "Car updated successfully", car: updatedCar });
  } catch (error) {
    console.error("Error updating Car:", error);
    res.status(500).json({
      message: "There is an error in Car Updating",
      error: error.message,
    });
  }
};

const carDelete = async (req, res) => {
  try {
    const car = await Cars.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    await car.deleteOne();
    res.status(200).json({ message: "Car deleted successfully" });
  } catch (error) {
    console.error("Error deleting Car:", error);
    res
      .status(500)
      .json({ message: "Error deleting Car", error: error.message });
  }
};

module.exports = { getAllCars, addCar, carUpdate, carDelete, getCarById };
