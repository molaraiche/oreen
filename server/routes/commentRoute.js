const router = require("express").Router();
const upload = require("../utils/imageUploader");

const {
  showComment,
  addComment,
  removeComment,
} = require("../controllers/commentController");

router.get("/", showComment);
router.post(
  "/addComment",
  [upload.fields([{ name: "profile", maxCount: 1 }])],
  addComment
);
router.delete("/:id", removeComment);

module.exports = router;
