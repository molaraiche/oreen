const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
const path = require("path");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const cloudinaryStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const ext = path.extname(file.originalname).slice(1);
    const allowedFormats = ["jpg", "jpeg", "png", "gif", "mp4", "avi"];

    if (!allowedFormats.includes(ext.toLowerCase())) {
      throw new Error("Unsupported file format.");
    }

    return {
      folder: "images",
      format: ext,
      public_id: `${Date.now()}-${file.originalname.split(".")[0]}`,
      resource_type: file.mimetype.startsWith("video/") ? "video" : "image",
    };
  },
});

const upload = multer({
  storage: cloudinaryStorage,
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "video/mp4",
      "video/avi",
    ];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only image and video formats are allowed!"), false);
    }
  },
});

module.exports = upload;
