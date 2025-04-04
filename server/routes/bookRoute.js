const router = require("express").Router();
const {
  showBooks,
  getBookById,
  demandBook,
  updateBookingStatus,
  deletedBookings,
} = require("../controllers/bookController");

router.get("/", showBooks);
router.get("/:id", getBookById);
router.post("/demandBook", demandBook);
router.put("/:id", updateBookingStatus);
router.delete("/:id", deletedBookings);

module.exports = router;
