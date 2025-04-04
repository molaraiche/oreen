const Comment = require("../model/commentModel");
const cloudinary = require("cloudinary").v2;
const Booking = require("../model/bookModel");

const showComment = async (req, res) => {
  try {
    const comments = await Comment.find().exec();
    const phoneNumbers = comments.map((comment) => comment.phone);
    const approvedBookings = await Booking.find({
      phone: { $in: phoneNumbers },
      status: "approved",
    }).exec();
    const approvedPhoneNumbers = new Set(
      approvedBookings.map((booking) => booking.phone)
    );
    const filteredComments = comments.filter((comment) =>
      approvedPhoneNumbers.has(comment.phone)
    );

    res.status(200).json({ Comments: filteredComments });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in fetching approved Comments",
      error: error.message,
    });
  }
};

const addComment = async (req, res) => {
  try {
    const { name, location, comment, profile, review, phone } = req.body;
    const newComment = new Comment({
      name,
      location,
      profile,
      comment,
      review,
      phone,
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
const updateCommentRank = async (req, res) => {
  try {
    const { hot } = req.body;
    const id = req.params.id;
    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { hot },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json({
      message: "Hot status has been updated",
      updatedComment,
    });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in updating Comment rank",
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

module.exports = { showComment, addComment, updateCommentRank, removeComment };
