const Cars = require("../model/carsModel");
const cloudinary = require("cloudinary").v2;

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
    // Log received data
    console.log("Received files:", req.files);
    console.log("Received body:", req.body);

    // Extract fields from req.body
    const { name, description, brand, model, rate, type, condition, price } =
      req.body;

    // Validate required text fields
    if (
      !name ||
      !price ||
      !description ||
      !brand ||
      !model ||
      !rate ||
      !type ||
      !condition
    ) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Ensure req.files is defined
    const files = req.files || {};

    // Process mainImage
    const mainImageFile = files.mainImage ? files.mainImage[0] : null;
    if (!mainImageFile) {
      return res.status(400).json({ message: "Main image is required!" });
    }
    const mainImage = {
      url: mainImageFile.path,
      public_id: mainImageFile.filename,
    };

    // Process secondaryImages
    const secondaryImageFiles = files.secondaryImages || [];
    const secondaryImages = secondaryImageFiles.map((file) => ({
      url: file.path,
      public_id: file.filename,
    }));

    // Process video (optional)
    const videoFile = files.video ? files.video[0] : null;
    const video = videoFile
      ? {
          url: videoFile.path,
          public_id: videoFile.filename,
        }
      : null;

    // Create new car document
    const newCar = new Cars({
      name,
      description,
      brand,
      price,
      model,
      rate,
      type,
      condition,
      mainImage,
      secondaryImages,
      video,
      status: "Free",
    });
    // Save to database
    const savedCar = await newCar.save();
    // Respond to client
    res.status(201).json({
      message: "Car added successfully",
      car: savedCar,
    });
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
    console.log("Received files:", req.files);
    console.log("Received body:", req.body);

    const id = req.params.id;
    const files = req.files || {};
    const { name, description, brand, model, rate, type, condition, price } =
      req.body;

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
      rate,
      type,
      condition,
      status: "Free",
    };
    const deleteMediaPromises = [];
    let mainImage = existingCar.mainImage;
    const mainImageFile = files.mainImage ? files.mainImage[0] : null;
    if (mainImageFile) {
      if (existingCar.mainImage && existingCar.mainImage.public_id) {
        deleteMediaPromises.push(
          cloudinary.uploader.destroy(existingCar.mainImage.public_id)
        );
      }
      mainImage = {
        url: mainImageFile.path,
        public_id: mainImageFile.filename,
      };
      updateFields.mainImage = mainImage;
    }
    let secondaryImages = existingCar.secondaryImages || [];
    const secondaryImageFiles = files.secondaryImages || [];
    if (secondaryImageFiles.length > 0) {
      if (Array.isArray(existingCar.secondaryImages)) {
        existingCar.secondaryImages.forEach((image) => {
          if (image.public_id) {
            deleteMediaPromises.push(
              cloudinary.uploader.destroy(image.public_id)
            );
          }
        });
      }
      secondaryImages = secondaryImageFiles.map((file) => ({
        url: file.path,
        public_id: file.filename,
      }));
      updateFields.secondaryImages = secondaryImages;
    }
    let video = existingCar.video;
    const videoFile = files.video ? files.video[0] : null;
    if (videoFile) {
      if (existingCar.video && existingCar.video.public_id) {
        deleteMediaPromises.push(
          cloudinary.uploader.destroy(existingCar.video.public_id, {
            resource_type: "video",
          })
        );
      }
      video = {
        url: videoFile.path,
        public_id: videoFile.filename,
      };
      updateFields.video = video;
    }
    await Promise.all(deleteMediaPromises);
    const updatedCar = await Cars.findByIdAndUpdate(id, updateFields, {
      new: true,
    });
    res.status(200).json({
      message: "Car updated successfully",
      car: updatedCar,
    });
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
    const imageDeletionPromises = [];
    const deleteMedia = async (publicId, resourceType = "image") => {
      try {
        if (publicId) {
          console.log(`Deleting Cloudinary ${resourceType}:`, publicId);
          const result = await cloudinary.uploader.destroy(publicId, {
            resource_type: resourceType,
          });
          console.log("Cloudinary response:", result);
          if (result.result !== "ok") {
            console.warn(`Failed to delete ${resourceType}:`, publicId);
          }
        }
      } catch (error) {
        console.error(
          `Error deleting Cloudinary ${resourceType}:`,
          publicId,
          error.message
        );
      }
    };

    // Delete mainImage
    if (car.mainImage?.public_id) {
      imageDeletionPromises.push(deleteMedia(car.mainImage.public_id));
    }
    // Delete secondaryImages
    if (Array.isArray(car.secondaryImages)) {
      car.secondaryImages.forEach((image) => {
        if (image.public_id) {
          imageDeletionPromises.push(deleteMedia(image.public_id));
        }
      });
    }
    // Delete video
    if (car.video?.public_id) {
      imageDeletionPromises.push(deleteMedia(car.video.public_id, "video"));
    }
    // Wait for all image deletions to complete
    await Promise.all(imageDeletionPromises);
    // Delete the car document
    await car.deleteOne();
    res
      .status(200)
      .json({ message: "Car and associated media deleted successfully" });
  } catch (error) {
    console.error("Error deleting Car:", error);
    res.status(500).json({
      message: "Error deleting Car",
      error: error.message,
    });
  }
};

module.exports = { getAllCars, addCar, carUpdate, carDelete };
