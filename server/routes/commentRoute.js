const router = require("express").Router();

const {
  showComment,
  addComment,
  removeComment,
  updateCommentRank,
} = require("../controllers/commentController");

router.get("/", showComment);
router.post("/addComment", addComment);
router.put("/:id", updateCommentRank);
router.delete("/:id", removeComment);

module.exports = router;
