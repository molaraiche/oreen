const Comment = require("../model/commentModel");
const cloudinary = require("cloudinary").v2;
const showComment = async (req, res) => {
  try {
    const response = await Comment.find().exec();
    res.status(200).json({ Comment: response });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in Comments fetching",
      error: error.message,
    });
  }
};
const addComment = async (req, res) => {
  try {
    const { name, phone, comment } = req.body;
    const profile = req.files?.profile
      ? {
          url: req.files.profile[0].path,
          public_id: req.files.profile[0].filename,
        }
      : null;
    const newComment = new Comment({
      name,
      phone,
      profile,
      comment,
    });
    const savedComment = await newComment.save();
    res.status(201).json({
      message: "New Comment has been added",
      savedComment,
    });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in Comment Adding",
      error: error.message,
    });
  }
};
const removeComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    const imageDeletionPromises = [];
    const deleteImage = async (publicId) => {
      try {
        if (publicId) {
          console.log("Deleting Cloudinary image:", publicId);
          const result = await cloudinary.uploader.destroy(publicId);
          console.log("Cloudinary response:", result);
          if (result.result !== "ok") {
            console.warn("Failed to delete image:", publicId);
          }
        }
      } catch (error) {
        console.error(
          "Error deleting Cloudinary image:",
          publicId,
          error.message
        );
      }
    };
    if (comment.profile?.public_id) {
      imageDeletionPromises.push(deleteImage(comment.profile.public_id));
    }
    if (comment.additionalImages && Array.isArray(comment.additionalImages)) {
      comment.additionalImages.forEach((image) => {
        if (image.public_id) {
          imageDeletionPromises.push(deleteImage(image.public_id));
        }
      });
    }
    await Promise.all(imageDeletionPromises);
    await comment.deleteOne();
    res.status(200).json({ message: "Comment and associated images deleted" });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({
      message: "Error deleting comment",
      error: error.message,
    });
  }
};

module.exports = { showComment, addComment, removeComment };
