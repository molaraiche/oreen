const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const cloudinaryStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "images", // Folder in Cloudinary where files will be stored
    format: async (req, file) => {
      const ext = file.mimetype.split("/")[1];
      return ext; // Use the actual file extension for images and videos
    },
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const upload = multer({
  storage: cloudinaryStorage,
  fileFilter: (req, file, cb) => {
    // Accept any image or video file
    if (
      file.mimetype.startsWith("image/") ||
      file.mimetype.startsWith("video/")
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only image and video formats are allowed!"), false);
    }
  },
});

module.exports = upload;
